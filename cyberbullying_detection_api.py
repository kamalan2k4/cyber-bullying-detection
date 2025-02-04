from fastapi import FastAPI, UploadFile, File, Form
import pandas as pd
import tensorflow as tf
import numpy as np
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Load pre-trained deep learning model (Replace with your trained model path)
model = tf.keras.models.load_model("cyberbullying_model.h5")

class TextInput(BaseModel):
    text: str

# Preprocessing function (Customize based on your trained model)
def preprocess_text(text):
    # Tokenization, padding, and preprocessing should match your trained model
    return np.array([text])  # Placeholder: Replace with actual preprocessing

@app.post("/predict-text/")
def predict_text(input: TextInput):
    processed_text = preprocess_text(input.text)
    prediction = model.predict(processed_text)
    result = "Offensive" if prediction[0][0] > 0.5 else "Non-Offensive"
    return {"text": input.text, "prediction": result, "confidence": float(prediction[0][0])}

@app.post("/predict-file/")
def predict_file(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)
    texts = df["text_column"].tolist()  # Adjust column name as per dataset
    processed_texts = [preprocess_text(text) for text in texts]
    predictions = model.predict(np.vstack(processed_texts))
    results = ["Offensive" if p[0] > 0.5 else "Non-Offensive" for p in predictions]
    return {"results": results}

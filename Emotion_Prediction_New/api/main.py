from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3001",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
MODEL_BREED = tf.keras.models.load_model("../models/InceptionV3BreedModel.h5")
MODEL_EMOTION = tf.keras.models.load_model("../models/dog_emotion.h5")
MODEL_AGE = tf.keras.models.load_model("../models/dog_age.h5")
MODEL_SKINDISEASE = tf.keras.models.load_model("../models/skinDiseases.h5")

CLASS_NAMES_EMOTION = ["Angry","Happy","Relaxed","Sad"]
CLASS_NAMES_AGE = ['Adult', 'Senior', 'Young']
CLASS_NAMES_SKINDISEASE = ["Alopecia","Folliculitis","Lumps and bumps","Rheum","Ringworm","Ticks","Vitiligo"]
CLASS_NAMES_BREED = ["afghan_hound", "african_hunting_dog", "airedale", "basenji", "basset", "beagle", "bedlington_terrier", "bernese_mountain_dog", "black-and-tan_coonhound", "blenheim_spaniel", "bloodhound", "bluetick", "border_collie", "border_terrier", "borzoi", "boston_bull", "bouvier_des_flandres", "brabancon_griffon", "bull_mastiff", "cairn", "cardigan", "chesapeake_bay_retriever", "chow", "clumber", "cocker_spaniel", "collie", "curly-coated_retriever", "dhole", "dingo", "doberman", "english_foxhound", "english_setter", "entlebucher", "flat-coated_retriever", "german_shepherd", "german_short-haired_pointer", "golden_retriever", "gordon_setter", "great_dane", "great_pyrenees", "groenendael", "ibizan_hound", "irish_setter", "irish_terrier", "irish_water_spaniel", "irish_wolfhound", "japanese_spaniel", "keeshond", "kerry_blue_terrier", "komondor", "kuvasz", "labrador_retriever", "leonberg", "lhasa", "malamute", "malinois", "maltese_dog", "mexican_hairless", "miniature_pinscher", "miniature_schnauzer", "newfoundland", "norfolk_terrier", "norwegian_elkhound", "norwich_terrier", "old_english_sheepdog", "otterhound", "papillon", "pekinese", "pembroke", "pomeranian", "pug", "redbone", "rhodesian_ridgeback", "rottweiler", "saint_bernard", "saluki", "samoyed", "schipperke", "scotch_terrier", "scottish_deerhound", "sealyham_terrier", "shetland_sheepdog", "standard_poodle", "standard_schnauzer", "sussex_spaniel", "tibetan_mastiff", "tibetan_terrier", "toy_terrier", "vizsla", "weimaraner", "whippet", "wire-haired_fox_terrier", "yorkshire_terrier"]

@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

# Breed
@app.post("/predict/breed")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL_BREED.predict(img_batch)

    predicted_class = CLASS_NAMES_BREED[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

# Emotion
@app.post("/predict/emotion")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL_EMOTION.predict(img_batch)

    predicted_class = CLASS_NAMES_EMOTION[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

# Age
@app.post("/predict/age")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL_AGE.predict(img_batch)

    predicted_class = CLASS_NAMES_AGE[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])

    age = None  # Initialize age
    if predicted_class == 'Adult':
        age = '2 - 7 years'
    elif predicted_class == 'Senior':
        age = 'above 7 years'
    elif predicted_class == 'Young':
        age = '1 - 2 years'

    return {
        'class': predicted_class,
        'age': age,
        'confidence': float(confidence)
    }

# Skin disease
@app.post("/predict/skindisease")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL_SKINDISEASE.predict(img_batch)

    predicted_class = CLASS_NAMES_SKINDISEASE[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8000",
    "https://enosium-track-1-rays-avc169qno-kr-2003.vercel.app",
    "https://enosium-track-1-rays.vercel.app/",
    "https://enosium-track-1-rays-git-main-kr-2003.vercel.app/",
    "https://enosium-track-1-rays-kr-2003.vercel.app/",
    
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {'detail': 'HomePage'}


@app.post("/getPrediction")
def get_prediction(request: dict):
    with open("Model.pkl", 'rb') as p:
        model = pickle.load(p)
    pred = model.predict([[request["noOfMaintainers"], request["history"], request["purpose"], request["loanAmount"], request["GorB"], request["marital"], request["noOfLoans"], request["age"], request["currentAmount"],
                           request["savingsAmount"], request["instPercent"], request["otherPlans"], request["abroad"], request["phoneAvail"], request["duration"], request["collateral"], request["job"], request["housing"], request["yearsOfStay"]]])
    print(pred)
    pred = np.array(pred)
    print(pred[0])
    print(request)
    return str(pred[0])

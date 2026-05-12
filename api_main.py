from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "status": "online",
        "project": "Attention Economy Revenue Simulator",
        "message": "FastAPI backend is successfully running!"
    }

@app.get("/api/revenue")
def get_revenue_data():
    
    return {
        "platform_name": "Attention Simulator",
        "total_revenue": 25000,
        "currency": "USD",
        "user_engagement_score": 92.5,
        "active_sessions": 450
    }


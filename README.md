# POC-45: Attention Economy Revenue Simulator - Jaliba Sherin K J

This project is a production-style intelligence dashboard developed for the Real Rails Intelligence Library. It simulates the mechanics of the Attention Economy, visualizing how user time and platform impressions translate into revenue generation.

## 🚀 Features
- **Revenue Simulation Engine:** Visualizes the conversion of time/impressions into platform revenue.
- **Data Insights:** Analysis of ad loads, CPM ranges, and creator revenue-share models.
- **Dashboard Layout:** Optimized 70/30 UI layout for clear data visualization.

---

## 🛠️ How to Run the Project

### 1. Backend Setup (FastAPI)
- Navigate to the `backend` folder:
  ```bash
  cd backend
  
  Install the required dependencies:
  ```bash
pip install -r requirements.txt

1. Backend Start Command

```bash
python -m uvicorn api_main:app --reload
2. Frontend Dependencies (npm install)
```bash
npm install

3. Frontend Run Command (npm run dev)
```Bash
npm run dev

📂 Project Structure
backend/: Contains the FastAPI application (api_main.py) for revenue logic.

src/: Frontend source code for the Next.js dashboard.

public/: Static assets and icons.

requirements.txt: Python dependencies for the backend.

package.json: Node.js dependencies for the frontend.

⚙️ Requirements
Python 3.8+

Node.js 16+

npm (comes with Node.js)

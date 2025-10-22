![OrderInn Price Predictor](/projects/orderinn.png)

# OrderInn Price Predictor

Internal platform that automates price prediction for new items in OrderInn’s catalog from Excel sheets.  
It lets you train machine learning models with historical data, generate prices consistently, and version both models and prediction scripts through an AI‑assisted interface.

---

## What it brings
- **Standardized pricing:** removes variability and human error in price setting.  
- **Speed:** the whole flow (train → predict → export) runs from the browser.  
- **Transparency:** each model and script is versioned, with the ability to roll back.  
- **Accessibility:** designed for non‑technical users in operations.  
- **Traceability:** every prediction and model is recorded with date, version and author.

---

## Key features
- **Prediction from Excel**
  - Upload a sheet with new products and export predicted prices to a new Excel file.
  - Automatic column pre‑processing and variable consistency with the trained model.
![OrderInn Price Predictor](/projects/orderinn-create.png)

- **Model training**
  - Upload historical files to retrain the model.
  - Save and version the model (Random Forest) with metadata.

- **AI‑guided updates**
  - Chat interface where users request changes to the prediction script.
  - AI proposes the modification, generates a new code version and allows rollback.
![OrderInn Price Predictor](/projects/orderinn-update.png)

- **Management and security**
  - Login‑based access.
  - Version control and execution audit.

---

## Short usage flow
1. Upload a historical Excel and train a RandomForestRegressor model (with automatic imputation and filtering).  
2. Upload a new Excel with items lacking prices → the system predicts values and returns the resulting file.  
3. Results and models are stored and available for download or audit.  
4. From the admin panel, ask AI for script adjustments and save new versions.

---

## Data and model
- **Input variables:**  
  Category_ID, SubCategory_ID, Category_Sort, SubCategory_Sort,  
  Item_IsFavorite, Item_IsAddExtras, Item_IsHeaderItemOnly, Item_IsOnPrintedMenu,  
  Original_Price, Item_RestaurantPrice.  
- **Target variable:** Item_OIPrice  
- **Pre‑processing:** missing value imputation (mean) and basic outlier filtering.  
- **Model:** *scikit‑learn* RandomForestRegressor, persisted with `joblib` and versioned on disk or S3.

---

## Results
- Exportable Excel predictions with full traceability.  
- Versioned trainings and scripts with safe rollback.  
- Significant reduction in manual pricing time and improved consistency across categories.

---

## Technical explanation

### Backend
- **Django 5.0:** modular structure with `prediccion` and `users` apps.  
- **Pandas:** data handling, Excel read/write and DataFrame transformations.  
- **Scikit‑learn:** training and prediction with `RandomForestRegressor`.  
- **Model persistence:** `joblib` for local and/or S3 storage.  
- **Database:** MySQL (metadata for users, models, predictions and versions).  
- **AI automation:** OpenAI API integration to edit and version the prediction script.  
- **Security:** native Django auth and session‑based access control.  

### Infrastructure and deployment
- **Cloud storage:** AWS S3 for results and artifacts.  
- **WSGI deployment:** Gunicorn + WhiteNoise for static files.  
- **Configuration:** environment variables for credentials and endpoints.  
- **UI:** HTML templates with Tailwind CSS, simple and usability‑focused.

---

## OrderInn — context
**OrderInn Inc.** is a Las Vegas (USA) company founded in 2001.  
It provides room service for hotels without a restaurant and for short‑term rentals.  
It has 50–200 employees and operates privately.


![OrderInn Price Predictor](/projects/orderinn.png)

# OrderInn Price Predictor

Plataforma interna que automatiza la predicción de precios para nuevos ítems del catálogo de OrderInn a partir de hojas Excel.  
Permite entrenar modelos de machine learning con datos históricos, generar precios de forma consistente y versionar tanto los modelos como los scripts de predicción mediante una interfaz asistida por IA.

---

## Qué aporta
- **Estandarización del pricing:** elimina la variabilidad y el error humano en la fijación de precios.  
- **Agilidad:** el flujo completo (entrenar → predecir → exportar) se realiza desde el navegador.  
- **Transparencia:** cada modelo y script queda versionado, con posibilidad de revertir.  
- **Accesibilidad:** pensado para usuarios no técnicos del área operativa.  
- **Trazabilidad:** cada predicción y modelo quedan registrados con fecha, versión y autor.

---

## Funcionalidades clave
- **Predicción desde Excel**
  - Carga de una hoja con nuevos productos y exportación de precios predichos en un nuevo Excel.
  - Preprocesado automático de columnas y consistencia de variables con el modelo entrenado.
![OrderInn Price Predictor](/projects/orderinn-create.png)


- **Entrenamiento del modelo**
  - Subida de archivos históricos para reentrenar el modelo.
  - Guardado y versionado del modelo (Random Forest) con metadatos.

- **Actualización guiada por IA**
  - Interfaz de chat donde el usuario solicita cambios al script de predicción.
  - La IA propone la modificación, genera una nueva versión del código y permite revertir.
![OrderInn Price Predictor](/projects/orderinn-update.png)


- **Gestión y seguridad**
  - Acceso mediante login.
  - Control de versiones y auditoría de ejecuciones.

---

## Flujo de uso (corto)
1. El usuario sube un Excel histórico y entrena un modelo RandomForestRegressor (con imputación y filtrado automático).  
2. Sube un nuevo Excel con ítems sin precio → el sistema predice los valores y devuelve el archivo resultante.  
3. Los resultados y modelos quedan almacenados y disponibles para descarga o auditoría.  
4. Desde el panel de administración, puede solicitar a la IA ajustes en el script y guardar nuevas versiones.

---

## Datos y modelo
- **Variables de entrada:**  
  Category_ID, SubCategory_ID, Category_Sort, SubCategory_Sort,  
  Item_IsFavorite, Item_IsAddExtras, Item_IsHeaderItemOnly, Item_IsOnPrintedMenu,  
  Original_Price, Item_RestaurantPrice.  
- **Variable objetivo:** Item_OIPrice  
- **Preprocesado:** imputación de valores faltantes (media) y filtrado básico de outliers.  
- **Modelo:** RandomForestRegressor de *scikit-learn*, persistido con `joblib` y versionado en disco o S3.

---

## Resultados
- Predicciones exportables en Excel con trazabilidad completa.  
- Entrenamientos y scripts versionados, con reversión segura.  
- Reducción significativa del tiempo de pricing manual y mejora de la coherencia entre categorías.

---

## Explicación técnica

### Backend
- **Django 5.0:** estructura modular con apps `prediccion` y `users`.  
- **Pandas:** manejo de datos, lectura/escritura de Excel y transformación de DataFrames.  
- **Scikit-learn:** entrenamiento y predicción con `RandomForestRegressor`.  
- **Persistencia de modelos:** `joblib` para almacenamiento local y/o S3.  
- **Base de datos:** MySQL (metadatos de usuarios, modelos, predicciones y versiones).  
- **Automatización IA:** integración con OpenAI API para edición y versionado del script.  
- **Seguridad:** autenticación nativa de Django y control de acceso por sesión.  

### Infraestructura y despliegue
- **Almacenamiento en la nube:** AWS S3 para resultados y artefactos.  
- **Despliegue WSGI:** Gunicorn + WhiteNoise para estáticos.  
- **Configuración:** variables de entorno para credenciales y endpoints.  
- **UI:** templates HTML con Tailwind CSS, diseño simple y orientado a usabilidad.

---

## OrderInn — contexto
**OrderInn Inc.** es una empresa con sede en Las Vegas (EE. UU.), fundada en 2001.  
Ofrece servicios de room service para hoteles sin restaurante propio y propiedades de alquiler temporal.  
Cuenta con entre 50 y 200 empleados y opera de forma privada.

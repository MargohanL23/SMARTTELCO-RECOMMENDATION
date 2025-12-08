# 🚀 SMARTTELCO: SISTEM REKOMENDASI PAKET JARINGAN CERDAS

## Proyek: Telco – Product Recommendation Offer based on Customer Behaviour

SmartTelco adalah aplikasi **Full-Stack** yang mendemonstrasikan implementasi **Machine Learning** untuk personalisasi penawaran produk dalam industri telekomunikasi.  
Sistem ini menggunakan model **XGBoost Classifier** yang dilatih pada data perilaku historis pelanggan untuk memprediksi **Target Offer** paling optimal, sehingga meningkatkan **acceptance rate** dan **loyalitas pelanggan**.

Antarmuka pengguna (UI) didesain dengan tema **Dark Mode**, dilengkapi **Splash Screen** dan **Dashboard Admin**.

---

## 🎯 Tujuan Proyek (The Why)

Proyek ini bertujuan mengatasi masalah utama yang dihadapi perusahaan Telco:

### 1. Meningkatkan Efisiensi Pemasaran  
Beralih dari **mass marketing** menuju **precision targeting** untuk memaksimalkan ROI promosi.

### 2. Menurunkan Risiko Churn  
Mengidentifikasi pelanggan berisiko (misalnya *Complaint Count* tinggi) dan menawarkan **Retention Offer** yang dipersonalisasi.

### 3. Mengoptimalkan Customer Lifetime Value (CLV)  
Menggunakan data perilaku pelanggan (pengeluaran, penggunaan data, frekuensi top-up) untuk merekomendasikan paket yang relevan.

---

## ⚙️ Arsitektur Teknologi

| Komponen       | Teknologi Utama                     | Peran |
|----------------|--------------------------------------|-------|
| **Model ML**   | Python, XGBoost, Scikit-Learn        | Memprediksi probabilitas 7–9 kategori Target Offer. |
| **Back-End API** | Python, Flask                     | Endpoints untuk Login/Register, Simulasi Prediksi (`/api/recommend`), dan Status Model (`/api/model_status`). |
| **Front-End**  | Vue.js (Vue 3), Tailwind CSS         | UI responsif, termasuk Splash Screen dan Dashboard Admin. |
| **Data**       | Pandas, CSV (*data_telco.csv*)       | Basis pelatihan model & profil simulasi. |

---

## 🛠️ Panduan Instalasi & Setup

### **Prasyarat**
- Python **3.8+**
- Node.js & npm/yarn
- File model: `xgboost_smote_telco.pkl` & `data_telco.csv` harus ada di folder **SmartTelco-BackEnd/**

---

## 1. Setup Back-End (Flask API)

Masuk ke direktori Back-End:

```bash
cd SmartTelco-BackEnd
Install dependencies:

pip install -r requirements.txt


Buat file .env:

SECRET_KEY="Ketik-Kunci-Rahasia-Anda-Di-Sini"


Jalankan server:

python api.py


Server berjalan di: http://127.0.0.1:5000

```

## 2. Setup Front-End (Vue.js)

Masuk ke direktori Front-End:


```bash
cd ../SmartTelco-FrontEnd


Install dependencies:

npm install


Jalankan aplikasi:

npm run dev


Aplikasi berjalan di: http://localhost:5173

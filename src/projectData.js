// src/projectData.js

export const projects = [
  {
    id: 1,
    title: 'Analisis Sentimen Ulasan Film',
    description: 'Model klasifikasi teks untuk menentukan sentimen (positif/negatif) dari ulasan film menggunakan model LSTM.',
    tags: ['NLP', 'TensorFlow', 'Keras', 'Python'],
  },
  {
    id: 2,
    title: 'Prediksi Harga Rumah',
    description: 'Model regresi untuk memprediksi harga rumah di suatu area berdasarkan fitur seperti luas tanah dan jumlah kamar menggunakan XGBoost.',
    tags: ['Regression', 'Scikit-learn', 'XGBoost', 'Pandas'],
  },
  {
    id: 3,
    title: 'Klasifikasi Gambar Bunga Iris',
    description: 'Membangun Convolutional Neural Network (CNN) untuk mengklasifikasikan 3 jenis bunga iris dengan akurasi tinggi.',
    tags: ['Computer Vision', 'PyTorch', 'CNN'],
  },
  // Tambahkan data proyek Anda yang lain di sini
];
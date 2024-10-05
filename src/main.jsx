import './index.css'; // Mengimpor gaya atau CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Mengimpor modul React untuk rendering ke DOM
import App from './App'; // Mengimpor komponen App, komponen utama aplikasi
import { BrowserRouter } from 'react-router-dom'; // Mengimpor BrowserRouter untuk routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Membungkus komponen App dengan BrowserRouter untuk mengaktifkan routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

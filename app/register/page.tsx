'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: "test@example.com", password: "password123" })
      });
      const data = await res.json();
      
      if (data.success) {
        alert("Registrasi Berhasil!");
      } else {
        alert("Gagal registrasi");
      }
    } catch (err) {
      alert("Terjadi kesalahan sistem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Daftar Akun Baru</h1>
      <p>Silakan klik tombol di bawah untuk simulasi pendaftaran instan</p>
      <button
        onClick={handleRegister}
        style={{ padding: '10px 20px', fontSize: '16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {loading ? 'Memproses...' : 'Daftar Sekarang'}
      </button>
    </div>
  );
      }

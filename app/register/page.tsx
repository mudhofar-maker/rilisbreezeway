'use client';

export default function RegisterPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Halaman Registrasi</h1>
      <button 
        onClick={() => alert('Berhasil!')}
        style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Daftar Sekarang
      </button>
    </div>
  );
}

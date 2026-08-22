'use client';

export default function RegisterPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Halaman Registrasi</h1>
      <button onClick={() => alert('Berhasil!')} style={{ padding: '10px 20px', background: 'blue', color: 'white' }}>
        Daftar Sekarang
      </button>
    </div>
  );
}

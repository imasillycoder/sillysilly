import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        // Mark admin locally
        localStorage.setItem('isAdmin', 'true');
        navigate('/');
      } else {
        setError(json.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={submit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
        <label className="block mb-2">
          <div className="text-sm mb-1">Username</div>
          <input value={username} onChange={e=>setUsername(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </label>
        <label className="block mb-4">
          <div className="text-sm mb-1">Password</div>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </label>
        <button type="submit" disabled={loading} className="w-full bg-slate-800 text-white py-2 rounded">
          {loading ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

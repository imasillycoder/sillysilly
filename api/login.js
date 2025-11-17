export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === 'admin' && adminPassword && password === adminPassword) {
      // In a real app you'd return a signed token. Here we return success only.
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}

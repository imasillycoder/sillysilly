export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === 'admin' && adminPassword && password === adminPassword) {
      // Set an HttpOnly cookie so client cannot tamper with it.
      // Cookie is simple flag 'isAdmin=1' — not cryptographically signed.
      // Only add the Secure attribute when running in production (HTTPS).
      const maxAge = 60 * 60 * 24 * 7; // 7 days
      const isProd = process.env.NODE_ENV === 'production';
      const secureAttr = isProd ? '; Secure' : '';
      const cookie = `isAdmin=1; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Strict${secureAttr}`;
      res.setHeader('Set-Cookie', cookie);
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}

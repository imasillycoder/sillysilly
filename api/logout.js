export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  // Clear the cookie. Only include Secure attribute in production.
  const isProd = process.env.NODE_ENV === 'production';
  const secureAttr = isProd ? '; Secure' : '';
  const cookie = `isAdmin=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict${secureAttr}`;
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ success: true });
}

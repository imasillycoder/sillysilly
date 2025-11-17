export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  // Clear the cookie
  const cookie = `isAdmin=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict; Secure`;
  res.setHeader('Set-Cookie', cookie);
  return res.status(200).json({ success: true });
}

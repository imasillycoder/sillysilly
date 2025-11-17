export default async function handler(req, res) {
  // Simple check: see if cookie "isAdmin=1" exists
  const cookie = req.headers?.cookie || '';
  const isAdmin = cookie.split(';').map(c => c.trim()).includes('isAdmin=1');
  if (isAdmin) return res.status(200).json({ authenticated: true });
  return res.status(200).json({ authenticated: false });
}

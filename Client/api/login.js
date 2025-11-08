export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); 
    return;
  }

  const { email, password } = req.body || {};
  const ok =
    email === (process.env.LOGIN_EMAIL || 'roozo@123.com') &&
    String(password) === String(process.env.LOGIN_PASSWORD || 123);

  res.status(200).json({ success: ok });
}

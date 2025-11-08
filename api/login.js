module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  let body = req.body;
  try {
    if (!body || typeof body === 'string') body = body ? JSON.parse(body) : {};
  } catch {
    body = {};
  }

  const { email, password } = body;

  const expectedEmail = process.env.LOGIN_EMAIL || 'roozo@123.com';
  const expectedPassword = String(process.env.LOGIN_PASSWORD ?? 123);

  const success = email === expectedEmail && String(password) === expectedPassword;

  console.log('LOGIN body =>', body, 'success =>', success);

  res.status(200).json({ success });
};

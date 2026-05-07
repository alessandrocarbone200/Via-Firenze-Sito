module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body || {};

  if (!password || password !== process.env.CATALOG_PASSWORD) {
    return res.status(401).json({ error: 'Password errata' });
  }

  res.status(200).json({ url: process.env.CATALOG_URL });
};

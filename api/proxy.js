// api/proxy.js
export default async function handler(req, res) {
  const { q, hl = 'en', gl = 'US' } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter "q"' });
  }

  const callback = `jQuery37108808087974703922_${Date.now()}`;
  const googleUrl = new URL('https://www.google.com/complete/search');
  googleUrl.searchParams.set('q', q);
  googleUrl.searchParams.set('hl', hl);
  googleUrl.searchParams.set('gl', gl);
  googleUrl.searchParams.set('xhr', '0');
  googleUrl.searchParams.set('client', 'psy-ab');
  googleUrl.searchParams.set('callback', callback);

  try {
    const response = await fetch(googleUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': `${hl}-${gl},en;q=0.9`
      }
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'Google request failed' });
    }

    const text = await response.text();
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy failed' });
  }
}

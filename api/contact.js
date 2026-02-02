/* api/contact.js */
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Log the data (In a real app, you'd send an email here)
    console.log('--- NEW MESSAGE ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a success page response
    res.status(200).send(`
      <html>
        <head>
          <title>Message Sent</title>
          <meta http-equiv="refresh" content="3;url=/" />
          <style>body { background: #0f0f11; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; }</style>
        </head>
        <body>
          <h1>Message Received, ${name}! Redirecting...</h1>
        </body>
      </html>
    `);
  } else {
    // Handle other methods
    res.status(405).send('Method Not Allowed');
  }
}
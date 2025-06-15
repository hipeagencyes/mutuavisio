import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, phone, message } = req.body;

  // Configura el transporte SMTP para Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // tu email de Gmail
      pass: process.env.MAIL_PASS, // tu contraseña de aplicación de Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'info@hipeagency.es', // tu email de destino
      subject: 'Contacto Web Mutuavisio',
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });
    res.status(200).send('sent');
  } catch (error) {
    res.status(500).send('failed');
  }
}
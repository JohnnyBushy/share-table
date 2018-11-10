import express from 'express';

export default function() {
  const router = express.Router();

  router.route('').post(sendEmail);

  async function sendEmail(req, res, next) {
    const email = req.body.email;

    email.id = Date.now();
    email.table = email.table.id;

    res.status(201);
    res.json({ email });
    next();
  }

  return router;
}

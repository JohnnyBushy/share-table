import express from 'express';
import EmailsService from '../services/emails';

export default function() {
  const router = express.Router();

  router.route('').post(sendEmail);

  async function sendEmail(req, res, next) {
    const email = req.body.email;
    email.id = Date.now();

    await EmailsService.sendTableByEmail(email.table, email.recipients);

    delete email.table;

    res.status(201);
    res.json({ email });
    next();
  }

  return router;
}

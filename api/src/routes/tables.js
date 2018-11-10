import express from 'express';
import TableRepository from '../repositories/table-repository';

export default function() {
  const router = express.Router();

  router.route('').post(createTable);
  router.route('/:id').put(saveTable);

  async function createTable(req, res, next) {
    const newTable = req.body.table;

    try {
      await TableRepository.save(newTable);

      res.status(201);
      res.json({ table: newTable });
      next();
    } catch (e) {
      next(e);
    }
  }

  async function saveTable(req, res, next) {
    const table = req.body.table;
    table.id = req.params.id

    try {
      await TableRepository.save(table);

      res.status(200);
      res.json({ table: table });
      next();
    } catch (e) {
      next(e);
    }
  }


  return router;
}

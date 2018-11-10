import express from 'express';
import bodyParser from 'body-parser';
import tablesRoutes from './routes/tables';
import emailsRoutes from './routes/emails';

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api/tables', tablesRoutes());
app.use('/api/emails', emailsRoutes());

export default app;

import 'dotenv/config';
import './db';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`); // eslint-disable-line
});

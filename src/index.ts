import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './databaseConnection';
import { clientRoute } from './routes/client.route';
import { companyRoute } from './routes/company.route';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '3000');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', clientRoute());
app.use('/', companyRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});



app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
function routes() {
  throw new Error('Function not implemented.');
}


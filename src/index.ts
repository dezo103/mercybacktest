import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import newsRoutes from './routes/newsRoutes';
import { AppDataSource } from './config/data-source';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');

    app.use('/news', newsRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
}

startServer();

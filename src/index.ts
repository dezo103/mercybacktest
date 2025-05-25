import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import newsRoutes from './routes/newsRoutes';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Убираем подключение к базе данных
// async function startServer() {
//   try {
//     await AppDataSource.initialize();
//     console.log('Database connection established');

// Статическая логика замены данных
app.use('/news', newsRoutes);

// Создаем фейковый маршрут, который просто возвращает данные
app.get('/', (req, res) => {
  const fakeNewsData = [
    { id: 1, title: 'New technology revolutionizes the world', content: 'Content of the article here' },
    { id: 2, title: 'Stock market trends 2025', content: 'Stock market prediction for 2025' },
    { id: 3, title: 'The future of artificial intelligence', content: 'AI will shape the next decade' }
  ];
  res.json(fakeNewsData); // Отправляем статический массив данных
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
//   } catch (error) {
//     console.error('Database connection failed', error);
//     process.exit(1);
//   }
// }

// startServer();

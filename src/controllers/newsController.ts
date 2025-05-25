import { Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import * as newsService from '../services/newsService';

export const getAllNews = catchAsync(async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const offset = Number(req.query.offset) || 0;
  const [news, total] = await newsService.getNewsList(limit, offset);
  res.json({ news, total });
});

export const getNewsById = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  const newsItem = await newsService.getNewsById(id);
  if (!newsItem) return res.status(404).json({ message: 'News not found' });
  res.json(newsItem);
});

export const createNews = catchAsync(async (req: Request, res: Response) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const savedNews = await newsService.createNewsItem(title, content);
  res.status(201).json(savedNews);
});

export const updateNews = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await newsService.updateNewsItem(id, req.body);

  if (!result) {
    return res.status(404).json({ message: 'News not found' });
  }

  res.json(result);
});

export const deleteNews = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const affectedRows = await newsService.deleteNewsItem(id);

  if (affectedRows === 0) {
    return res.status(404).json({ message: 'News not found' });
  }

  res.status(200).json({ message: 'News deleted successfully' });
});

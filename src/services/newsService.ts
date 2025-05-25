import { AppDataSource } from '../config/data-source';
import { News } from '../entities/News';

const newsRepository = AppDataSource.getRepository(News);
export const getNewsList = async (limit: number = 10, offset: number = 0) => {
  return await newsRepository.findAndCount({
    take: limit,
    skip: offset,
  });
};

export const getNewsById = async (id: number) => {
  return await newsRepository.findOneBy({ id });
};

export const createNewsItem = async (title: string, content: string) => {
  const newNews = newsRepository.create({ title, content });
  return await newsRepository.save(newNews);
};

export const updateNewsItem = async (id: number, updateData: Partial<News>) => {
  await newsRepository.update(id, updateData);
  return await newsRepository.findOneBy({ id });
};

export const deleteNewsItem = async (id: number) => {
  const result = await newsRepository.delete(id);
  return result.affected ?? 0;
};

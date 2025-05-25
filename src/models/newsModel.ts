// TODO добавить в entities необходимые поля
// import {model, Schema} from 'mongoose';
//
// const newsSchema = new Schema({
//   title: String, // Заголовок
//   description: String, // Текст-превью на карточке
//   titleImgURL: String, // Фото на карточке и на странице
//   imgAltEng: String,
//   imgTitleRus: String,
//   content: String, // Основной текст на странице *
//   status: {type: String, enum: ['published', 'draft', 'archived']},
//   tags: [String],
//   isHomePageShow: Boolean, // Отображать на Главной странице
//   isTop: Boolean,// Сделать главной новостью
//   isSuggest: Boolean,// Предлагать новость
//   additionalPhotos: [String], // Дополнительные фото
//   section: {type: String, enum: ['news' , 'project' , 'event' , 'request' , 'annualReport']},
//
//   id: String,
//   createDate: Date,
//   publishedDate: Date,
//   updateDate: Date,
// });
//
// export const News = model('News', newsSchema);

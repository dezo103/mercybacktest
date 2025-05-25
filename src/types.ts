type TServerMeta = {
  id: string;
  createDate: Date;
  publishedDate?: Date;
  updateDate?: Date;
};

type TStatus = 'published' | 'draft' | 'hidden'; // опубликовано | черновик | скрыто
type TSection = 'news' | 'project' | 'event' | 'request' | 'annualReport';

// Проекты
export type TProject = {
  title: string; // Заголовок
  description: string; // Текст-превью на карточке
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
  duration: string; // Время проведения
  participateOpportunity: string; // Возможность участия
  location: string; // Место проведения
  participantNumber: string; // Количество участников
  startDate: string; // Дата начала проекта
  endDate: string; // Дата окончания проекта
  content: string; // Описание проекта
  status: TStatus;
  tags?: string[];
  isHomePageShow: boolean; // Отображать на Главной странице
  isSuggest: boolean; // Предлагать проект
  additionalPhotos: string[]; // Дополнительные фото
  section: TSection;
};

export type TTProjectDTO = TProject & TServerMeta;

// Акции
export type TEvent = {
  title: string; // Заголовок
  description: string; // Текст-превью на карточке
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
  duration: string; // Время проведения
  participateOpportunity: string; // Возможность участия
  location: string; // Место проведения
  startDate: string; // Дата начала акции
  endDate: string; // Дата окончания акции
  content: string; // Описание акции
  status: TStatus;
  tags?: string[];
  isHomePageShow: boolean; // Отображать на Главной странице
  isTop: boolean; // Сделать главной новостью
  isSuggest: boolean; // Предлагать акцию
  additionalPhotos: string[]; // Дополнительные фото
  section: TSection;
};

export type TEventDTO = TEvent & TServerMeta;

type TDetails = {
  recipient: string; // Получатель
  currentAccount: string; // Рассчетный счет
  bank: string; // Банк
  BIC: string; // Bank Identification Code, БИК - Код банка
  // UNP: string, // УНП
  TIN: string; //Taxpayer Identification Number, ИНН - Идентификационный номер налогоплательщика
  purpose: string; // Назначение платежа
};

// Просьбы
export type TRequest = {
  title: string; // Заголовок
  totalDonationBYN: number; // Сумма пожертвования BYN
  remainingDonationBYN: number; // Оставшаяся сумма, BYN
  startDate: string; // Дата начала просьбы
  endDate: string; // Дата окончания просьбы
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
  content: string; // Описание просьбы
  isHomePageShow: boolean; // Отображать на Главной странице
  details: TDetails;
  status: TStatus;
  tags?: string[];
  additionalPhotos: string[]; // Дополнительные фото
  section: TSection;
};

export type TRequestDTO = TRequest & TServerMeta;

// Новости
export type TNews = {
  title: string; // Заголовок
  description: string; // Текст-превью на карточке
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
  content: string; // Основной текст на странице *
  status: TStatus;
  tags?: string[];
  isHomePageShow: boolean; // Отображать на Главной странице
  isTop: boolean; // Сделать главной новостью
  isSuggest: boolean; // Предлагать новость
  additionalPhotos: string[]; // Дополнительные фото
  section: TSection;
};

export type TNewsDTO = TNews & TServerMeta;

// Годовые отчеты
export type TAnnualReport = {
  year: number; // Год
  nameFolder: string; // Название папки
  content: string[]; // Дополнительные фото
  section: TSection;
};

export type TAnnualReportDTO = TAnnualReport & TServerMeta;

// Контакты
export type TContacts = {
  title: string; // Заголовок
  address: string; // Адрес
  departmentSecretary: string; // Секретарь отдела
  phone?: string; // Телефон
  email: string; // Электронная почта
  correspondenceAddress: string; // Адрес для письменной корреспонденции *
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
};

export type TContactsDTO = TContacts & TServerMeta;

// О нас
export type TAbout = {
  description: string; // Описание на странице *
  titleImgURL: string; // Фото на карточке и на странице
  imgAltEng?: string;
  imgTitleRus?: string;
  contacts: TContacts;
};

export type TAboutDTO = TContacts & TServerMeta;

// Как помочь
export type TCanHelp = {
  description: string; // Описание на странице *
};

export type TCanHelpDTO = TContacts & TServerMeta;

// Авторизация
export type TAuth = {
  login: string;
  password: string;
};

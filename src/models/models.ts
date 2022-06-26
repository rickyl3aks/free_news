export interface types {
  type: string | object;
}

export interface data {
  data: object;
}

export interface mapping {
  _id: string;
  summary: string;
  media: string;
  title: string;
  link: string;
  published_date: string;
  author: string;
  rights: string;
}

export interface Article {
  id: string;
  summary: string;
  link: string;
  title: string;
  media: string;
  published: string;
  author: string;
  rights: string;
}

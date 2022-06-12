export interface types {
  type: string | object;
}

export interface mapping {
  _id: string;
  summary: string;
  media: string;
  title: string;
  link: string;
  published_date: string;
}

export interface Article {
  id: string;
  summary: string;
  open: string;
  visible: boolean;
}

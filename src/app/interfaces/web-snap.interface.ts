export interface WebSnapI{
  id?:number;
  title: string;
  description: string;
  createdDate: Date;
  likes: number;
  image: string;
  isLiked?: boolean;
}

export interface WebSnapModelI{
  websnap?:WebSnapI;
}
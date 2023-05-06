export type postData = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  body: string;
  user_id: number;
  user_name: string;
  avatar: string;
};

export interface postsData extends postData {
  thumbnail: string;
}

export type jsonPlaceholderData = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  body: string;
  user_id: number;
  user_name: string;
  avatar: string;
  thumbnail: string;
};

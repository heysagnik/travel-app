export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  isAdmin?: boolean;
  status?: "active" | "inactive" | "pending";
  notifications?: [string];
  posts?: [string];
}

export interface IPost {
  title: string;
  content: string;
  image: string;
  category: "beach" | "mountain" | "city" | "countryside" | "other";
  tags: [string];
  author: string;
  interestedUsers: [string];
  limit: number;
  comments: [string];
  status: "active" | "inactive";
}

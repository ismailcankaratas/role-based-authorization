export type Comment = {
  id: string;
  body: string;
  authorId: string;
  createdAt: Date;
};

export type Todo = {
  id: string;
  title: string;
  userId: string;
  completed: boolean;
  invitedUsers: string[];
};

export type Role = "admin" | "moderator" | "user";
export type User = { blockedBy: string[]; id: string; roles: Role[] };

import { Todo, User } from "./types";

export const user: User = { blockedBy: ["2"], id: "1", roles: ["user"] };
export const todo: Todo = {
  completed: false,
  id: "3",
  invitedUsers: [],
  title: "Test Todo",
  userId: "1",
};

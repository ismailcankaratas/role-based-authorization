import { user } from "./constant";
import { Role, User } from "./types";

type Permission = (typeof ROLES)[Role][number];

const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  moderator: ["view:comments", "create:comments", "delete:comments"],
  user: ["view:comments", "create:comments"],
} as const;

export function hasPermission(user: User, permission: Permission) {
  return user.roles.some((role) =>
    (ROLES[role] as readonly Permission[]).includes(permission)
  );
}

// Can create a comment
if (hasPermission(user, "create:comments")) {
  console.log("Can create a comment");
}
// Can view all comments
if (hasPermission(user, "view:comments")) {
  console.log("Can view all comments");
}

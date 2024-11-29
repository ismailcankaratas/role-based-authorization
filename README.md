# Role-Based Authorization System

This project implements a flexible and extensible role-based authorization system for managing user permissions in a TypeScript environment.

## Features

- **Role-Based Access Control (RBAC):** Supports roles such as `admin`, `moderator`, and `user`.
- **Dynamic Permissions:** Permissions can be static (`true` or `false`) or dynamic based on custom logic.
- **Resource-Specific Actions:** Manage permissions for `comments` and `todos` resources.
- **Type-Safe Design:** Fully typed system using TypeScript, ensuring compile-time safety.
- **Extensibility:** Easily add new roles, resources, or actions.

## Roles and Permissions

The system defines permissions for the following roles:

### Admin

- **Comments:** Can view, create, and update all comments.
- **Todos:** Can view, create, update, and delete all todos.

### Moderator

- **Comments:** Can view, create, and update all comments.
- **Todos:** Can view, create, and update todos. Can delete todos only if they are completed.

### User

- **Comments:**
  - View: Allowed unless the author is blocked by the user.
  - Create: Always allowed.
  - Update: Allowed only if the user is the comment's author.
- **Todos:**
  - View: Allowed unless the todo's owner is blocked by the user.
  - Create: Always allowed.
  - Update: Allowed if the user is the owner or invited to the todo.
  - Delete: Allowed if the user is the owner or invited and the todo is completed.

## Functions

### `hasPermission`

Checks whether a user has a specific permission for a resource and action.

#### Parameters:

- `user`: The user object.
- `resource`: The resource type (`comments` or `todos`).
- `action`: The action to check (`view`, `create`, `update`, or `delete`).
- `data` (optional): The specific resource data required for dynamic permissions.

#### Example:

```typescript
// Check if a user can create a comment
if (hasPermission(user, "comments", "create")) {
  console.log("Can create a comment");
}

// Check if a user can view a specific todo
if (hasPermission(user, "todos", "view", todo)) {
  console.log("Can view the `todo` Todo");
}

// Check if a user can view all todos
if (hasPermission(user, "todos", "view")) {
  console.log("Can view all todos");
}
```

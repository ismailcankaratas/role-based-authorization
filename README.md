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

To install and set up the repository, you typically follow these steps:

1. **Clone the Repository**:
   First, clone the repository to your local machine using Git.
   ```bash
   git clone https://github.com/ismailcankaratas/role-based-authorization.git
   cd role-based-authorization
   ```

2. **Install Dependencies**:
   The `package.json` file indicates that the project uses Node.js and contains all the required dependencies. Use npm or yarn to install them:
   ```bash
   npm install
   ```
   or, if you prefer Yarn:
   ```bash
   yarn install
   ```

3. **Check TypeScript Configuration (Optional)**:
   If the project uses TypeScript (`types.ts` indicates this), ensure TypeScript is installed globally or locally within the project:
   ```bash
   npm install -g typescript
   ```

4. **Start the Application**:
   Depending on the setup, you may find a script in `package.json` (like `start`, `dev`, or `build`) to run the application. Use the relevant command:
   ```bash
   npm start
   ```
   or
   ```bash
   npm run dev
   ```

5. **Environment Variables**:
   If the project requires environment variables, check for `.env` or documentation in the `README.md` file for instructions. You might need to create and configure a `.env` file.

6. **Verify Setup**:
   Test the application to ensure it works as expected after installation.

---

## Contact

For any questions or feedback, please contact [İsmail Can Karataş](https://www.linkedin.com/in/ismailcankaratas/). 

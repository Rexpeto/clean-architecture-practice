export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const UserEmptyState: User = {
  id: "",
  name: "",
  email: "",
  password: "",
};

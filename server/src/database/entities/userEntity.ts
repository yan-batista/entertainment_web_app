export interface UserEntity {
  email: string;
  password: string;
}

export interface UserEntityDTO {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserEntitySelect {
  id: number;
  email: string;
  password: string;
}

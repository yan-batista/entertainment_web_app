declare namespace Express {
  export interface Request {
    email: string;
    isAuthenticated: boolean;
  }
}

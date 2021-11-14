declare namespace Express {
  interface Request {
    user: {
      _id?: string;
      fullName?: string;
      userName?: string;
      email?: string;
      isAdmin?: boolean;
      createdAt?: Date;
      updatedAt?: Date;
      __v?: number;
      iat?: number;
      exp?: number;
    };
  }
}

import { IUser } from "./User";

// For sign in form
export interface ISignInData {
  email: string;
  password: string;
}

// For sign up form
export interface ISignUpData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface bla extends ISignInData, IUser {}

export interface IUser {
  fullName: string;
  email: string;
  avatarURL: string;
  token: string;
}

export interface IUpdateUserData {
  fullName: string
  username: string
  email: string
  contactNumber: string
  yourWebsite: string
  country: string
  city: string
  telegram: string
  password: string
  confirmPassword: string
}

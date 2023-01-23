import { IVacancy } from "./Vacancy";

export interface IUser {
  _id: string;
  typeUser: "Employee" | "Employer";
  fullName: string;
  username: string;
  email: string;
  token: string;
  description: string;
  avatarURL?: string;
  backgroundURL?: string;
  contactNumber?: string;
  yourWebsite?: string;
  country?: string;
  city?: string;
  telegram?: string;
  jobIndustries?: string[];
  jobPositions?: string[];
  jobTypes?: string[];
  jobExperience?: string;
  jobSalary?: number[];
  ourVacancies?: any[];
  englishLevel?: string;
  pdfFile?: string;
  profession?: string;
  savedVacancies?: string[];
  company?: ICompanyProfile;
}

export interface ICompanyProfile {
  companyName?: string;
  companyLocation?: string;
  memberSince?: string;
  companyAddress?: string;
  companyNumber?: string;
  companyEmail?: string;
  aboutCompany?: string;
  companyLogo?: string;
  companyBackground?: string;
}

export interface IUserProfile {
  fullName?: string;
  username?: string;
  email?: string;
  avatarURL?: string;
  backgroundURL?: string;
  contactNumber?: string;
  yourWebsite?: string;
  country?: string;
  city?: string;
  telegram?: string;
  description?: string;
  jobIndustries?: string[];
  jobPositions?: string[];
  jobTypes?: string[];
  jobExperience?: string;
  englishLevel?: string;
  profession?: string;
  pdfFile?: string;
  jobSalary?: number[];
}

export interface UserInfoForUpdate {
  userId: string;
  updatedInfo: IUserProfile | ICompanyProfile;
}

export interface ISaveVacancy {
  userId: string;
  vacancyId: string;
}

export interface IAdditionalInfo {
  jobIndustries?: string[];
  jobPositions?: string[];
  jobTypes?: string[];
  jobExperience?: string;
  jobSalary?: number[];
  avatarURL?: string;
  backgroundURL?: string;
}

export interface IAboutUser {
  userId?: string;
  description: string;
}

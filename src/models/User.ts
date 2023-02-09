import { ICompanyProfile } from "./Company";

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
}

export interface IUserProfile {
  fullName?: string;
  username?: string;
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
  jobSalary?: number[];
}

interface CompanyInfoAllowUpdate {
  companyName: string;
  memberSince: string;
  companyLocation: string;
  companyAddress: string;
  companyLogo?: string;
  companyBackground?: string;
}

interface EmployerInfoAllowUpdate {
  fullName: string;
  email: string;
  contactNumber: string;
}

export interface UpdatedCompanyInfo {
  companyId?: string;
  updatedInfo: CompanyInfoAllowUpdate | { description?: string };
}

export interface UpdatedUserInfo {
  userId: string;
  updatedInfo: EmployerInfoAllowUpdate | IUserProfile;
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

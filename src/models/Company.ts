export interface ICompanyProfile {
  _id?: string;
  companyName: string;
  companyLocation: string;
  memberSince: string;
  companyAddress: string;
  companyNumber: string;
  companyEmail: string;
  description: string;
  companyLogo?: string;
  companyBackground?: string;
  ourVacancies: [];
  owner: String;
}

export interface EmployerProfile {
  companyName: string;
  fullName: string;
  contactNumber: string;
  email: string;
  companyLocation: string;
  memberSince: string;
  companyAddress: string;
  companyLogo?: string;
  companyBackground?: string;
}

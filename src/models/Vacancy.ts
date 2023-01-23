export interface IEmploymentInfo {
  jobTypes: string[];
  jobExperience: string;
  jobIndustries?: string[];
  jobPositions?: string[];
  jobSalary?: number[];
}

export interface IOverviewCompanyInfoInfo {
  companyName: string;
  location: string;
  address: string;
  contactNumber: string;
  email?: string;
  memberSince?: string;
  companyLogo?: string;
  companyBackground?: string;
  aboutCompany?: string;
}

export interface IVacancy extends IEmploymentInfo {
  _id: string;
  backgroundURL: string;
  avatarURL: string;
  // employmentInfo: IEmploymentInfo
  // overviewInfo: IOverviewCompanyInfoInfo
  jobTitle: string;
  jobDescription: string;
  jobAuthor: string;
  jobTags?: string[];
}

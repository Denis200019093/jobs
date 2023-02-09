export interface PropsToFilterVacancy {
  search_value: string;
  industries?: string[];
  locations?: string[];
  positions?: string[];
  types?: string[];
}

interface SuccessResponse {
  success: boolean;
}

export interface DataBooleanResponse {
  data: SuccessResponse;
}

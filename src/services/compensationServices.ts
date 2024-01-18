import { postMethod } from "../helpers/api";

interface ICompensationRequest {
  policyId: number;
  date: Date | null;
  amount: number;
  hoptitalName: string;
  hopitalCode: string;
  dateRequest: Date | null;
  usedServices: string;
  getOption: number;
  note: string;
  status: boolean;
}

const insertCompensation = async (data: ICompensationRequest) => {
  const response = await postMethod("/Compensation", data);
  return response;
};

export { insertCompensation };

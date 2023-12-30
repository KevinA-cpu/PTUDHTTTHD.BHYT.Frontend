import { getMethod } from "../helpers/api";

const getInsuranceApprovalList = async () => {
  const response = await getMethod("/InsuranceApproval/list");
  return response;
};

export { getInsuranceApprovalList };

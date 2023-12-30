import { deleteMethod, getMethod } from "../helpers/api";

const getCustomerPolicy = async (id: string) => {
  const response = await getMethod("/CustomerPolicy/" + id);
  return response;
};

const rejectCustomerPolicy = async (policyId: number) => {
  const response = await deleteMethod("/CustomerPolicy?policyId=" + policyId);
  return response;
};

export { getCustomerPolicy, rejectCustomerPolicy };

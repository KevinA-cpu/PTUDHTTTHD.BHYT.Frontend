import { getMethod } from "../helpers/api";

const getPaymentRequest = async (id: string) => {
  const response = await getMethod("/InsurancePayment/" + id);
  return response;
};

export { getPaymentRequest };

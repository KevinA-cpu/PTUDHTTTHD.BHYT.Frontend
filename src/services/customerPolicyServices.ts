import { getMethod } from "../helpers/api";

const getCustomerPolicy = async (id: string) => {
  const response = await getMethod("/CustomerPolicy/" + id);
  return response;
};

export { getCustomerPolicy };

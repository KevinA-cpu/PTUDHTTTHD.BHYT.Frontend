import { getMethod, postMethod } from "../helpers/api";

interface HealthIndicator {
  customerId: number;
  height?: number;
  weight?: number;
  cholesterol?: number;
  ibm?: number;
  bpm?: number | null;
  respiratoryRate?: number | null;
  diseases?: string | null;
}

const updateProfile = async (data: HealthIndicator) => {
  const response = await postMethod("/HealthIndicator", data);
  return response;
};

const getProfile = async (userId: number) => {
  const response = await getMethod("/HealthIndicator?userId=" + userId);
  return response;
};

export { updateProfile, getProfile };

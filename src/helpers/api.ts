import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

const { VITE_API_PROTOCOL, VITE_API_DOMAIN, VITE_API_PORT, VITE_API_ROOTPATH } =
  import.meta.env;

const axiosInstance = axios.create({
  baseURL: `${VITE_API_PROTOCOL}://${VITE_API_DOMAIN}:${VITE_API_PORT}/${VITE_API_ROOTPATH}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useGetQuery = (url: string) => {
  return useQuery(url, async () => {
    const { data } = await axiosInstance.get(url);
    return data;
  });
};

const usePostMutation = (url: string, data: any) => {
  return useMutation(async () => {
    const { data: responseData } = await axiosInstance.post(url, data);
    return responseData;
  });
};

const usePutMutation = (url: string, data: any) => {
  return useMutation(async () => {
    const { data: responseData } = await axiosInstance.put(url, data);
    return responseData;
  });
};

const useDeleteMutation = (url: string) => {
  return useMutation(async () => {
    const { data } = await axiosInstance.delete(url);
    return data;
  });
};

const setAuthHeader = (accessToken: string) => {
  axiosInstance.defaults.headers.common['Authorization'] =
    'Bearer ' + accessToken;
};

const clearAuthHeader = () => {
  delete axiosInstance.defaults.headers.common['Authorization'];
};

export {
  useGetQuery,
  usePostMutation,
  usePutMutation,
  useDeleteMutation,
  setAuthHeader,
  clearAuthHeader,
};

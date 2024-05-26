import { HTTP } from '../http';

const getDefault = async () => {
  const response = await HTTP({
    url: '/',
  });
  return response.data;
}

const defaultApi = {
  getDefault,
};

export default defaultApi;

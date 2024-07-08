import { HTTP } from '../http';

const getDefault = async () => {
  const response = await HTTP({
    url: '/fastest_lap',
  });
  return response.data;
}

const defaultApi = {
  getDefault,
};

export default defaultApi;

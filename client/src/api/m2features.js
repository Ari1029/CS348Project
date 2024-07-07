import { HTTP } from '../http';

const getFastestLap = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/fastest-lap',
    data: payload,
  });
  return response.data;
}

const m2featuresApi = {
  getFastestLap,
};

export default m2featuresApi;

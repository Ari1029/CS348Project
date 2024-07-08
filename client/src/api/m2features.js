import { HTTP } from '../http';

const getFastestLap = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/fastest_lap',
    data: payload,
  });
  return response.data;
}

const getBestCircuitForConstructor = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/best_circuits_for_constructor',
    data: payload,
  });
  return response.data;
}

const m2featuresApi = {
  getFastestLap,
  getBestCircuitForConstructor,
};

export default m2featuresApi;

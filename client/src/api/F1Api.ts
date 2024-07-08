import { HTTP } from '../http';

export const getFastestLap = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/fastest_lap',
    data: payload,
  });
  return response.data;
}

export const getBestCircuitForConstructor = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/best_circuits_for_constructor',
    data: payload,
  });
  return response.data;
}

export const getMostRacedAgainst = async (payload) => {
  const response = await HTTP({
    method: 'post',
    url: '/m2features/most_raced_against',
    data: payload,
  });
  return response.data;
}

export const getAvgPositionForRacers = async () => {
  const response = await HTTP({
    url: '/m2features/avg_pos_for_racer',
  });
  return response.data;
}

export const oldFastestLap = async () => {
  const response = await HTTP({
    url: '/m1features/fastest_lap',
  });
  return response.data;
}
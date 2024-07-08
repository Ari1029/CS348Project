export interface GetFastestLapPayload {
  race_name: string;
  race_year: number;
  driver_surname: string;
  driver_forename: string;
};

export interface GetBestCircuitForConstructorPayload {
  constructor_name: string;
};

export interface GetMostRacedAgainstPayload {
  driver_surname: string;
  driver_forename: string;
};

export interface GetConsecutiveWinsPayload {
  driver_surname: string;
  driver_forename: string;
};

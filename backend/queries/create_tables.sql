CREATE TABLE Circuits(
  circuitId INT NOT NULL PRIMARY KEY,
  circuitRef VARCHAR(255),
  name VARCHAR(255),
  location VARCHAR(255),
  country VARCHAR(255),
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  alt INT,
  url VARCHAR(255)
);

CREATE TABLE ConstructorResults(
  constructorResultsId INT NOT NULL PRIMARY KEY,
  raceId INT,
  constructorId INT,
  points DECIMAL(10, 2),
  status VARCHAR(255),
);

CREATE TABLE ConstructorStandings(
  constructorStandingsId INT NOT NULL PRIMARY KEY,
  raceId INT,
  constructorId INT,
  points DECIMAL(10, 2),
  position INT,
  positionText VARCHAR(255),
  wins INT
);

CREATE TABLE Constructors(
  constructorId INT NOT NULL PRIMARY KEY,
  constructorRef VARCHAR(255),
  name VARCHAR(255),
  nationality VARCHAR(100), -- Changed from 255 to 100
  url VARCHAR(255)
);

CREATE TABLE DriverStandings(
  driverStandingsId INT NOT NULL PRIMARY KEY,
  raceId INT,
  driverId INT,
  points DECIMAL(10, 2),
  position INT,
  positionText VARCHAR(255),
  wins INT
);

CREATE TABLE Drivers(
  driverId INT NOT NULL PRIMARY KEY,
  driverRef VARCHAR(255),
  number INT,
  code VARCHAR(255),
  forename VARCHAR(255),
  surname VARCHAR(255),
  dob DATE,
  nationality VARCHAR(100), -- Changed from 255 to 100
  url VARCHAR(255)
);

CREATE TABLE LapTimes(
  raceId INT,
  driverId INT,
  lap INT,
  position INT,
  time VARCHAR(255),
  milliseconds INT,
  PRIMARY KEY (raceId, driverId, lap)
);

CREATE TABLE PitStops(
  raceId INT,
  driverId INT,
  stop INT,
  lap INT,
  time VARCHAR(255),
  duration VARCHAR(255),
  PRIMARY KEY (raceId, driverId, stop)
);

CREATE TABLE Qualifying(
  qualifyId INT NOT NULL PRIMARY KEY,
  raceId INT,
  driverId INT,
  constructorId INT,
  number INT,
  position INT,
  q1 VARCHAR(255),
  q2 VARCHAR(255),
  q3 VARCHAR(255)
);

CREATE TABLE Races(
  raceId INT NOT NULL PRIMARY KEY,
  year INT,
  round INT,
  circuitId INT,
  name VARCHAR(255),
  date DATE,
  time VARCHAR(255),
  url VARCHAR(255),
  fp1_date DATE,
  fp1_time VARCHAR(255),
  fp2_date DATE,
  fp2_time VARCHAR(255),
  fp3_date DATE,
  fp3_time VARCHAR(255),
  quali_date DATE,
  quali_time VARCHAR(255),
  sprint_date DATE,
  sprint_time VARCHAR(255)
);

CREATE TABLE Results(
  resultId INT NOT NULL PRIMARY KEY,
  raceId INT,
  driverId INT,
  constructorId INT,
  number INT,
  grid INT,
  position INT,
  positionText VARCHAR(255),
  positionOrder INT,
  points DECIMAL(10, 2),
  laps INT,
  time VARCHAR(255),
  milliseconds INT,
  fastestLap INT,
  rank INT,
  fastestLapTime VARCHAR(255),
  fastestLapSpeed VARCHAR(255),
  statusId INT
);

CREATE TABLE Seasons(
  year INT NOT NULL PRIMARY KEY,
  url VARCHAR(255)
);

CREATE TABLE SprintResults(
  resultId INT NOT NULL PRIMARY KEY,
  raceId INT,
  driverId INT,
  constructorId INT,
  number INT,
  grid INT,
  position INT,
  positionText VARCHAR(255),
  positionOrder INT,
  points DECIMAL(10, 2),
  laps INT,
  time VARCHAR(255),
  milliseconds INT,
  fastestLap INT,
  rank INT,
  fastestLapTime VARCHAR(255),
  fastestLapSpeed VARCHAR(255),
  statusId INT
);

CREATE TABLE STATUS(
  statusId INT NOT NULL PRIMARY KEY,
  status VARCHAR(255)
);

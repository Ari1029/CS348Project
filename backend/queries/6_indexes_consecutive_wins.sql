CREATE INDEX idx_results_driver ON results(driverId);
CREATE INDEX idx_results_race ON results(raceId);
CREATE INDEX idx_races_race ON races(raceId);
CREATE INDEX idx_drivers_name ON drivers(forename, surname);
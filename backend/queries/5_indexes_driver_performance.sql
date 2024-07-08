CREATE INDEX idx_drivers_driverid ON drivers(driverid);
CREATE INDEX idx_results_driverid_raceid ON results(driverid, raceid);
CREATE INDEX idx_races_raceid ON races(raceid);
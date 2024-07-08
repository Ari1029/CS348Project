WITH target_driver AS (
  SELECT driverId
  FROM Drivers
  WHERE forename = ${driver_forename}
    AND surname = ${driver_surname}
),

racer_x_races AS (
  SELECT raceId
  FROM Results
  WHERE driverId IN (SELECT driverId FROM target_driver)
),

race_participants AS (
  SELECT r1.raceid, results.driverid
  FROM racer_x_races r1, results
  WHERE  r1.raceid = results.raceid
    AND results.driverid NOT IN (SELECT driverId FROM target_driver)
),

driver_race_counts AS (
    SELECT r.driverid, COUNT(*) AS race_count
    FROM race_participants r
    GROUP BY r.driverid
)

SELECT d.forename, d.surname,drc.race_count
FROM driver_race_counts drc, drivers d
WHERE drc.driverid = d.driverid
ORDER BY drc.race_count DESC
LIMIT 3;

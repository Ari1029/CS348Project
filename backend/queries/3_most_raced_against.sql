WITH racer_x_races AS (
  SELECT raceid
  FROM results
  WHERE driverid = ${driverid}
),

race_participants AS (
  SELECT r1.raceid, results.driverid
  FROM racer_x_races r1, results
  WHERE  r1.raceid = results.raceid
    AND results.driverid != ${driverid}
),

driver_race_counts AS (
    SELECT r.driverid, COUNT(*) AS race_count
    FROM results r
    GROUP BY r.driverid
)

SELECT d.driverid, drc.race_count
FROM driver_race_counts drc, drivers d
WHERE drc.driverid = d.driverid
ORDER BY drc.race_count DESC
LIMIT 3;

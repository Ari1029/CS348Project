WITH average_pos_racer AS (
  SELECT d.driverid, d.forename, d.surname, AVG(res.positionorder) AS avg_position
  FROM results res
  JOIN drivers d ON res.driverid = d.driverid
  GROUP BY d.driverid, d.forename, d.surname
  ORDER BY avg_position ASC
)

SELECT
  res.forename,
  res.surname,
  d.nationality,
  (res.wins * 100.0 / res.races_participated) AS win_percentage,
  a.avg_position,
  res.races_participated
FROM
  DriverPerformanceSummary res
JOIN
  drivers d ON d.driverid = res.driverid
JOIN
  average_pos_racer a ON a.driverid = d.driverid
WHERE
  res.forename = ${driver_surname}
  AND res.surname = ${driver_forename};

SELECT d.driverid, d.forename, d.surname, AVG(res.positionorder) AS avg_position
FROM results res
JOIN drivers d ON res.driverid = d.driverid
GROUP BY d.driverid, d.forename, d.surname
ORDER BY avg_position ASC;
SELECT d.driverref, AVG(res.positionorder) AS avg_position
FROM results res
JOIN drivers d ON res.driverid = d.driverid
GROUP BY d.driverref
ORDER BY avg_position ASC;
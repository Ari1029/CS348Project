CREATE VIEW DriverPerformanceSummary AS
SELECT
    d.driverid,
    d.forename,
    d.surname,
    COUNT(DISTINCT r.raceid) AS races_participated,
    SUM(s.points) AS total_points,
    COUNT(w.driverid) AS wins
FROM
    drivers d
JOIN
    results s ON d.driverid = s.driverid
JOIN
    races r ON s.raceid = r.raceid
LEFT JOIN
    results w ON d.driverid = w.driverid AND w.position = 1 AND w.raceid = s.raceid
GROUP BY
    d.driverid,
    d.forename,
    d.surname
ORDER BY
    total_points DESC;

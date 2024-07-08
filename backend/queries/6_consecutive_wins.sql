WITH RECURSIVE RecursiveWins (driverId, raceId, date, consecutive_wins) AS (
    SELECT
        r.driverId,
        ra.raceId,
        ra.date,
        1 AS consecutive_wins
    FROM
        results r
        INNER JOIN races ra ON r.raceId = ra.raceId
    WHERE
        r.position = 1
        AND r.driverId = 30
    
    UNION ALL
    
    SELECT
        rw.driverId,
        r.raceId,
        ra.date,
        rw.consecutive_wins + 1
    FROM
        results r
        INNER JOIN races ra ON r.raceId = ra.raceId
        INNER JOIN RecursiveWins rw ON rw.driverId = r.driverId
        AND ra.date > rw.date
        AND r.position = 1
        AND r.driverId = 30
        AND NOT EXISTS (
            SELECT 1
            FROM results r2
            INNER JOIN races ra2 ON r2.raceId = ra2.raceId
            WHERE r2.driverId = rw.driverId
            AND ra2.date > rw.date
            AND ra2.date < ra.date
            AND r2.position != 1
        )
)
SELECT
    driverId,
    MAX(consecutive_wins) AS max_consecutive_wins
FROM
    RecursiveWins
GROUP BY
    driverId;
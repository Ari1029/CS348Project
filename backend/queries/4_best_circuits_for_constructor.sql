WITH constructor_wins AS (
    SELECT 
        r.circuitId,
        c.name AS circuit_name,
        COUNT(*) AS win_count
    FROM Results res
    JOIN Races r ON res.raceId = r.raceId
    JOIN Constructors cons ON res.constructorId = cons.constructorId
    JOIN Circuits c ON r.circuitId = c.circuitId
    WHERE res.position = 1
      AND cons.name = ${constructor_name}
    GROUP BY r.circuitId, c.name
),

top_circuits AS (
    SELECT circuitId, win_count
    FROM constructor_wins
    ORDER BY win_count DESC
    LIMIT 3
)

SELECT 
    cw.circuit_name,
    cw.win_count
FROM constructor_wins cw
JOIN top_circuits tc ON cw.circuitId = tc.circuitId
ORDER BY cw.win_count DESC;
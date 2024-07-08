SELECT
    *,
    (wins * 100.0 / races_participated) AS win_percentage
FROM
    DriverPerformanceSummary
WHERE
    (wins * 100.0 / races_participated) >= ${lower_bound}
    AND (wins * 100.0 / races_participated) <= ${upper_bound}
ORDER BY
    win_percentage DESC;

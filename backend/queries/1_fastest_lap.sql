-- EXAMPLE: WE HAVE r.name = 'Monaco Grand Prix', r.year = '2023', d.surname = 'Hamilton', d.forename = 'Lewis' 
SELECT min(milliseconds)
FROM laptimes l, races r, drivers d
WHERE
    r.name = ${race_name} AND
    r.year = ${race_year} AND
    d.surname = ${driver_surname} AND
    d.forename = ${driver_forename} AND
    l.raceid = r.raceid AND 
    d.driverid = l.driverid;

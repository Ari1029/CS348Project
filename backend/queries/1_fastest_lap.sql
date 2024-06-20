-- WE HAVE r.name = 'Monaco Grand Prix', r.year = '2023', d.surname = 'Hamilton', d.forename = 'Lewis' HARDCODED FOR NOW
SELECT min(milliseconds)
FROM laptimes l, races r, drivers d
WHERE
    r.name = %s AND
    r.year = %s AND
    d.surname = %s AND
    d.forename = %s AND
    l.raceid = r.raceid AND 
    d.driverid = l.driverid
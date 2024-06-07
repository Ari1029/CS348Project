# Queries

## Populating data
Connect to the db of choice (cloud or local) + CD into this directory and run the following commands in any order:
```sql
\copy Circuits FROM 'circuits.csv' DELIMITER ',' CSV HEADER
\copy ConstructorResults FROM 'constructor_results.csv' DELIMITER ',' CSV HEADER
\copy ConstructorStandings FROM 'constructor_standings.csv' DELIMITER ',' CSV HEADER
\copy Constructors FROM 'constructors.csv' DELIMITER ',' CSV HEADER
\copy DriverStandings FROM 'driver_standings.csv' DELIMITER ',' CSV HEADER
\copy Drivers FROM 'drivers.csv' DELIMITER ',' CSV HEADER
\copy LapTimes FROM 'lap_times.csv' DELIMITER ',' CSV HEADER
\copy PitStops FROM 'pit_stops.csv' DELIMITER ',' CSV HEADER
\copy Qualifying FROM 'qualifying.csv' DELIMITER ',' CSV HEADER
\copy Races FROM 'races.csv' DELIMITER ',' CSV HEADER
\copy Results FROM 'results.csv' DELIMITER ',' CSV HEADER
\copy Seasons FROM 'seasons.csv' DELIMITER ',' CSV HEADER
\copy SprintResults FROM 'sprint_results.csv' DELIMITER ',' CSV HEADER
\copy STATUS FROM 'status.csv' DELIMITER ',' CSV HEADER
```
> Relevant documentation: [Import from CSV](https://neon.tech/docs/import/import-from-csv)

## Connecting to Neon DB


```bash
neonctl connection-string dev/adityakeerthi --master neondb --psql
```
DROP TABLE IF EXISTS hello_cs348;
CREATE TABLE hello_cs348 (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL
);

INSERT INTO hello_cs348 VALUES (1, 'Hello, CS348!');
INSERT INTO hello_cs348 VALUES (2, 'Goodbye, CS348!');

SELECT * FROM hello_cs348; -- Returns entries in new table
export const drivers = [
    'Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Carlos Sainz', 
    'Sergio Pérez', 'George Russell', 'Lando Norris', 'Daniel Ricciardo', 
    'Esteban Ocon', 'Pierre Gasly', 'Fernando Alonso', 'Lance Stroll', 
    'Valtteri Bottas', 'Guanyu Zhou', 'Kevin Magnussen', 'Nico Hülkenberg', 
    'Alexander Albon', 'Logan Sargeant', 'Oscar Piastri', 'Yuki Tsunoda'
].map(name => ({
    forename: name.split(' ')[0],
    surname: name.split(' ')[1]
}));

export const raceNames = [
    "Bahrain Grand Prix",
    "Saudi Arabian Grand Prix",
    "Australian Grand Prix",
    "Azerbaijan Grand Prix",
    "Miami Grand Prix",
    "Monaco Grand Prix",
    "Spanish Grand Prix",
    "Canadian Grand Prix",
    "Austrian Grand Prix",
    "British Grand Prix",
    "Hungarian Grand Prix",
    "Belgian Grand Prix",
    "Dutch Grand Prix",
    "Italian Grand Prix",
    "Singapore Grand Prix",
    "Japanese Grand Prix",
    "Qatar Grand Prix",
    "United States Grand Prix",
    "Mexico City Grand Prix",
    "São Paulo Grand Prix",
    "Las Vegas Grand Prix",
    "Abu Dhabi Grand Prix"
];

export const constructors = [
    "McLaren", "BMW Sauber", "Williams", "Renault", "Toro Rosso", "Ferrari",
    "Toyota", "Super Aguri", "Red Bull", "Force India", "Honda", "Spyker",
    "MF1", "Spyker MF1", "Sauber", "BAR", "Jordan", "Minardi", "Jaguar",
    "Prost", "Arrows", "Benetton", "Brawn", "Stewart", "Tyrrell", "Lola",
    "Ligier", "Forti", "Footwork", "Pacific", "Simtek", "Team Lotus",
    "Larrousse", "Brabham", "Dallara", "Fondmetal", "March", "Andrea Moda",
    "AGS", "Lambo", "Leyton House", "Coloni", "Euro Brun", "Osella", "Onyx",
    "Life", "Rial", "Zakspeed", "RAM", "Alfa Romeo"
];
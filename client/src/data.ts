export const drivers = [
    'Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc', 'Carlos Sainz', 
    'Sergio Perez', 'George Russell', 'Lando Norris', 'Daniel Ricciardo', 
    'Esteban Ocon', 'Pierre Gasly', 'Fernando Alonso', 'Lance Stroll', 
    'Valtteri Bottas', 'Zhou Guanyu', 'Kevin Magnussen', 'Nico Hulkenberg', 
    'Alexander Albon', 'Logan Sargeant', 'Oscar Piastri', 'Yuki Tsunoda'
].map(name => ({
    forename: name.split(' ')[0],
    surname: name.split(' ')[1]
}));

export const raceNames = [
    "Australian Grand Prix", "Malaysian Grand Prix", "Chinese Grand Prix", "Bahrain Grand Prix",
    "Spanish Grand Prix", "Monaco Grand Prix", "Turkish Grand Prix", "British Grand Prix",
    "German Grand Prix", "Hungarian Grand Prix", "European Grand Prix", "Belgian Grand Prix",
    "Italian Grand Prix", "Singapore Grand Prix", "Japanese Grand Prix", "Brazilian Grand Prix",
    "Abu Dhabi Grand Prix", "Canadian Grand Prix", "French Grand Prix", "United States Grand Prix"
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
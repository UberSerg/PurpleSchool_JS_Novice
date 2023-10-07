const positionLat = 10;      // Текущая широта
const positionLong = 15;     // Текущая долгота

const addressLat = 20;     // Целевая широта
const addressLong = 25;    // Целевая долгота    

// AB = √ (x 2 - x 1)**2+ (y 2 - y 1)**2
// √ в JS Math.sqrt()

const distance = Math.sqrt((addressLat-positionLat)**2+(addressLong-positionLong)**2);

console.log(`Расстояние до точки назначения равно ${distance}`);
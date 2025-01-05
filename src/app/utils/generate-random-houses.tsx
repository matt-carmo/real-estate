import { locations } from "./locations";

const houseNames = [
    "Palm Harbor",
    "Sunset Villa",
    "Golden Retreat",
    "Cozy Haven",
    "Modern Escape",
    "Garden View",
    "Minimalist Loft",
    "Classic Bungalow",
    "Countryside Cottage",
    "Family Haven",
    "Luxury Villa",
    "Tiny Home",
    "Executive Estate",
    "Serene Retreat",
  ];
  
  const streetNames = [
    "Green Valley",
    "Oceanview",
    "Park Avenue",
    "Maple Street",
    "Hilltop Lane",
    "Orchid Avenue",
    "Palm Street",
    "Elm Street",
    "Pine Road",
    "Sunrise Avenue",
    "Maple Lane",
    "Willow Road",
    "Executive Drive",
    "Tranquil Court",
  ];
  export interface IHouse {
    id: number;
    price: number;
    currency: string;
    payment_frequency: string;
    name: string;
    address: string;
    beds: number;
    baths: number;
    dimensions: string;
    image_url: string;
    location_id: number;
  }
  
  const generateRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  const generateHouses = (count: number): IHouse[] => {
    const houses: IHouse[] = [];
    for (let i = 1; i <= count; i++) {
      const location = locations[generateRandomInt(0, locations.length - 1)];
      const houseName = houseNames[generateRandomInt(0, houseNames.length - 1)];
      const streetName =
        streetNames[generateRandomInt(0, streetNames.length - 1)];
      houses.push({
        id: i,
        price: generateRandomInt(900, 3000),
        currency: "USD",
        payment_frequency: "month",
        name: houseName,
        address: `${generateRandomInt(1, 999)} ${streetName}, ${
          location.location_name
        }, SP`,
        beds: generateRandomInt(1, 5),
        baths: generateRandomInt(1, 4),
        dimensions: `${generateRandomInt(4, 10)}x${generateRandomInt(5, 12)} m²`,
        image_url: `house-${generateRandomInt(1, 7)}.png`,
        location_id: location.location_id,
      });
    }
    return houses;
  };

  export { generateHouses };
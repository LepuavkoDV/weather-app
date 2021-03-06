export enum Weathers {
  CLOUDY = 'CLOUDY',
  RAINY = 'RAINY',
  SNOWY = 'SNOWY',
  STORMY = 'STORMY',
  SUNNY = 'SUNNY',
}

export type weather = Weathers.CLOUDY | Weathers.RAINY | Weathers.SNOWY | Weathers.STORMY | Weathers.SUNNY;

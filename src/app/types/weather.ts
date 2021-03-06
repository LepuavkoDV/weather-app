export enum Weathers {
  cloudy = 'cloudy',
  rainy = 'rainy',
  snowy = 'snowy',
  stormy = 'stormy',
  sunny = 'sunny',
}

export type weather = Weathers.cloudy | Weathers.rainy | Weathers.snowy | Weathers.stormy | Weathers.sunny;

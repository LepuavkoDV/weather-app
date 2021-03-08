export interface IWeather {
  coord: {
    lon: string,
    lat: number,
  };
  weather: Array<any>;
  base: string;
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
  };
  visibility: number;
  wind: {
    speed: number,
    deg: number,
  };
  clouds: {};
  dt: number;
  sys: {};
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

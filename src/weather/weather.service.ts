import { Injectable, } from "@nestjs/common";
import axios from 'axios';
import { Resultado } from "./interfaces/resultado.interface";
@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY
  private readonly url = process.env.WEATHER_URL_API;

  constructor() { }

  async getHumidityByLocation(lat: number, lon: number, humidity: number): Promise<Resultado> {
    const url = `${this.url}lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    const response = await axios.get(url);

    return response.data;
  }
}
import { BadRequestException, Injectable, } from "@nestjs/common";
import axios from 'axios';
import { Resultado } from "./interfaces/resultado.interface";
@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY
  private readonly url = process.env.WEATHER_URL_API;

  constructor() { }

  async getHumidityByLocation(lat: number, lon: number, humidityUser: number): Promise<Resultado> {
    const url = `${this.url}lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    
    try { 
      const response = await axios.get(url);
      const humidityOW = response.data.main.humidity;
      const city = response.data.name;
      const inTheLimit = this.checkHumidity(humidityUser, humidityOW);

      if (!inTheLimit) {
        return {
          status: false,
          message: `Alerta: A umidade atual em ${city} é de ${humidityOW}%, que é maior que o valor informado de ${humidityUser}%.`
        }
      }

      return {
        status: true,
        message: `A umidade atual em ${city} é de ${humidityOW}%, e está dentro do limite informado de ${humidityUser}%.`
      }
    } catch (error) {
      console.error('Erro ao obter dados de umidade:', error);
      throw new Error('Não foi possível obter dados de umidade. Verifique os dados informados.');
    }
  }

  checkHumidity(humidityUser: number, humidityOW: number): boolean {
    if (humidityOW > humidityUser) {
      return false;
    }
    return true;
  }
}
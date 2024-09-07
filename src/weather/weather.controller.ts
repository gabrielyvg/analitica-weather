import { Body, Controller, Get, Query } from "@nestjs/common";
import { Resultado } from "./interfaces/resultado.interface"; 
import { WeatherService } from "./weather.service";
import { WeatherDto } from "./dto/weather.dto";

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeather(@Query() query: WeatherDto) {
    const { lat, lon, humidity } = query;
    return this.weatherService.getHumidityByLocation(lat, lon, humidity);
  }
}
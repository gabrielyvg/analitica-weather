import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherDto } from "./dto/weather.dto";

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('humidity-by-location/')
  getHumidityByLocation(@Query() query: WeatherDto) {
    const { lat, lon, humidity } = query;
    return this.weatherService.getHumidityByLocation(lat, lon, humidity);
  }
}
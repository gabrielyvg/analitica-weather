import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherDto } from "./dto/weather.dto";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('humidity-by-location/')
  @ApiQuery({
    name: 'lat',
    type: Number,
    description: 'Latitude da localização',
  })
  @ApiQuery({
    name: 'lon',
    type: Number,
    description: 'Longitude da localização',
  })
  @ApiQuery({
    name: 'humidity',
    type: Number,
    description: 'Nível de umidade',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna a umidade para a localização especificada.',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro de validação se os parâmetros forem incorretos.',
  })
  getHumidityByLocation(@Query() query: WeatherDto) {
    const { lat, lon, humidity } = query;
    return this.weatherService.getHumidityByLocation(lat, lon, humidity);
  }
}
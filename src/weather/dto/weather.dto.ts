import { IsNotEmpty, IsNumber } from "class-validator";

export class WeatherDto {
  @IsNotEmpty({ message: 'Latitude não deve ser vazio' })
  @IsNumber({}, { message: 'Latitude deve ser um número' })
  lat: number;

  @IsNotEmpty({ message: 'Longitude não deve ser vazio' })
  @IsNumber({}, { message: 'Longitude deve ser um número' })
  lon: number;

  @IsNotEmpty({ message: 'Umidade não deve ser vazio' })
  @IsNumber({}, { message: 'Umidade deve ser um número' })
  humidity: number;
}
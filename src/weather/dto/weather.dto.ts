import { IsNotEmpty, IsNumber } from "class-validator";

export class WeatherDto {
  @IsNotEmpty()
  @IsNumber({}, { message: 'Latitude deve ser um número' })
  lat: number;

  @IsNotEmpty()
  @IsNumber({}, { message: 'Longitude deve ser um número' })
  lon: number;

  @IsNotEmpty()
  @IsNumber({}, { message: 'Humidade deve ser um número' })
  humidity: number;
}
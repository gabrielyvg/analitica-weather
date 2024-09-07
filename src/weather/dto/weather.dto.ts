import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class WeatherDto {
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  humidity: number;
}
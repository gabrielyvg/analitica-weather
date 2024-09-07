import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    WeatherModule,
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}

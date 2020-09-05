import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CoffeesController } from './coffees/coffee.controller';

@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [AppService],
})
export class AppModule {}

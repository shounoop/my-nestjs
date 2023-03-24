import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/cats.controller';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { consultantModule } from './consultant/consultant.module';
import { consultantcontroller } from './consultant/consultant.controller';
import { consultantService } from './consultant/consultant.service';

@Module({
  imports: [consultantModule],
  controllers: [AppController,consultantcontroller],
  providers: [AppService,consultantService],
})
export class AppModule {}

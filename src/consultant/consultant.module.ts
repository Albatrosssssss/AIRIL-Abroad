import { Module } from '@nestjs/common';
import { consultantcontroller } from './consultant.controller';
import { consultantService } from './consultant.service';
import { AppModule } from 'src/app.module';
import { AppController } from 'src/app.controller';

@Module({
  imports: [],
  controllers: [consultantcontroller],
  providers: [consultantService],
})
export class consultantModule {}
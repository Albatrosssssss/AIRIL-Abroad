import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { UserController } from 'src/User/User.controller';
import { UserService } from 'src/User/User.service';
import { UserModule } from 'src/User/User.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(ormConfig)],
  controllers: [],
  providers: [],
=======
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { consultantModule } from './consultant/consultant.module';
import { consultantcontroller } from './consultant/consultant.controller';
import { consultantService } from './consultant/consultant.service';

@Module({
  imports: [consultantModule],
  controllers: [AppController,consultantcontroller],
  providers: [AppService,consultantService],
>>>>>>> 9f0dece3b6fc10844c70e409a83603b2d7dde501
})
export class AppModule {}

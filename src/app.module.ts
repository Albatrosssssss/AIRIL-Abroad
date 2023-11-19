import { Module } from '@nestjs/common';
import { UserController } from 'src/User/User.controller';
import { UserService } from 'src/User/User.service';
import { UserModule } from 'src/User/User.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(ormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}

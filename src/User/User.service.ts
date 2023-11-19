import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './User.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './UpdateUser.dto';

@Injectable()
export class UserService {
 
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
    ){}
  
    async create(userDto: UserDto) {
      const data = await this.userRepository.create(userDto);
      return this.userRepository.save(data);
    }

    findAll() {
      return this.userRepository.find();
    }

    async findOne(id: number) {
      const data = await this.userRepository.findOne({where: {id: id}});
  
      console.log(data);
      
      if (data === null) {
        throw new NotFoundException(` ID ${id} not found`);
      }
      return data;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
      const entityToUpdate = await this.userRepository.findOne({where: {id: id}});
      if(entityToUpdate === null)
      {
        throw new NotFoundException(`ID ${id} not found`);
      }
    }  

    async remove(id: number) {
      const taskToRemove = await this.userRepository.findOne({where: {id: id}});
      if (!taskToRemove) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      } 
      return await this.userRepository.remove(taskToRemove);
    }






  
  getHello(): string {
    return 'Hello World!';
  }
  // userRegistration(userInfo: User): String{
  //   this.userInfo.push(userInfo);
  //   return 'user has been successfully added';
  // }
  userUpdateNumber(): String{
    
    return 'number updated';
  }
  deleteUser(): String{
    return 'user deleted';
  }
  showUser():String{
    return 'User show';
  }
  takeAppointment(): String {
    return 'appointment taken'
  }
  cancelAppointment(): String {
    return 'appointment taken'
  }
  giveAppointmentByAdmin(): String {
    return 'appointment edited by admin'
  }
  applicationTrackingByAdmin():String{
    return 'application status is inserted'
  }
  applicationTrackingByUser():String{
    return 'application status is done'
  }
  insertPrivacyPolicy(): String {
    return 'Privacy Policy Inserted'
  }
  login(): String {
    return 'Login successful'
  }
  uploadPicture(): String { 
    return 'Picture Uploaded'
  }

}
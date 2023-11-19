import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './User.service';
import { UserDto } from './User.dto';
import { userInfo } from 'os';
import { UpdateUserDto } from './UpdateUser.dto';

@Controller('user')
export class UserController {
  constructor(private  userService: UserService) {}
  // public userService: UserService = new UserService();
  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  //User registration (Name/id/Age/Gender/Prefered_Country/Phone_Number, password)
  @Post('/createUser')
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get('/findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/find/:id')
  findOne(@Param('id') id: string) {
    let data = this.userService.findOne(+id);
    return data;
  }

  @Patch('/updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(+id);
      return { message: ` ID ${id} has been successfully deleted` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      throw error;
    }
  }

  //update phone number (id,Phone Number)
  @Patch('/updateNumber/:id/number')
  userUpdateNumber(): String{
    return this.userService.userUpdateNumber();
  }

  //delete a user (id)
  @Post('/deteleUser/:id')
  deleteUser(): String{
    return this.userService.deleteUser();
  }

  //Show users description(id)
  @Get('/showUser/:id')
  showUser():String{
    return this.userService.showUser();
  }

  //take an appointment insert(id, appointment_id, name , prefered country, date , current study)
  //check appointment is exist or not
  @Post('/takeAppointment/:id')
  takeAppointment(): String {
    return this.userService.takeAppointment();
  }
 
  //cancel an appointment insert(appointment_id, )
  @Post('/cancelAppointment/:id')
  cancelAppointment(): String {
    return this.userService.cancelAppointment();
  }
  
  //give an appointment by adnin (id, name , prefered country, date , current study)
  @Get('/giveAppointmentByAdmin/:id')
  giveAppointmentByAdmin(): String {
    return this.userService.giveAppointmentByAdmin();
  }

  //application tracking insert by admin (id) 
  @Get('/applicationTrackingByAdmin/:id')
  applicationTrackingByAdmin():String{
    return this.userService.applicationTrackingByAdmin();
  }

  //application tracking show (id) 
  @Get('/applicationTrackingByUser/:id')
  applicationTrackingByUser():String{
    return this.userService.applicationTrackingByUser();
  }

  //insert privacy policy by admin
  @Post('/insertPrivacyPolicy/:id')
  insertPrivacyPolicy(): String {
    return this.userService.insertPrivacyPolicy();
  }

  //Login with (id & password) 
  //First check if already exist or not 
  @Get('/login/:id/:password') 
  login(): String {
    return this.userService.login();
  }

  //documents upload (id , picture)
  @Post('/uploadPicture/:id')
  uploadPicture(): String { 
    return this.userService.uploadPicture();
  }
  // //   Using Param method 
  // @Get('/searchuserbyid/:id')
  // searchUserById(@Param('id') userID:number):string{
  //   return "the user id is "+userID;
  // }
  // @Get('/searchuserbyname/:name')
  // searchUserByName(@Param('name') userName:number):string{
  //   return "the user id is "+userName;
  // }
  // @Get('/searchuserbyaddress/:address')
  // searchUserByAdress(@Param('address') userAddress:number):string{
  //   return "the user id is "+userAddress;
  // }
  // @Get('/searchuserbyage/:age')
  // searchUserByAge(@Param('age') userAge:number):string{
  //   return "the user id is "+userAge;
  // }

  // //   Using Query Method
  //   @Get('/searchuserbyquery')
  //     searchUserByQuery(@Query('myquery') myquery:string):object{
  //       return Object;
  //     }

  // //   Using Body Method || Get 
  //   @Get('/searchuserbynameid')
  //     searchUserByNameId(@Body() mybody:object):object{
  //       return mybody;
  //     }

  //   @Get('/searchuserbyagee')
  //   searchUserByAgee(@Body() mybody:object):object{
  //     return mybody;
  //   }

  //   @Get('/searchuserbybody')
  //   searchUserByAddress(@Body() mybody:object):object{
  //     return mybody;
  //   }

  // // Using Param key & Post method 
  // @Post('/insertuserbyid/:id')
  //   inseruserbyid(@Param('id') userId:number){
  //     return `New id is posted : ${userId}`
  //   }
}
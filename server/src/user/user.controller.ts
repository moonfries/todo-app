/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'dto/userDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  addUser(@Body() requestData: CreateUserDto) {
    return this.userService.addUser(requestData);
  }
}

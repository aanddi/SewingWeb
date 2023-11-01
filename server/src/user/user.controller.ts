import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('byId')
  async getUserById(@Body() dto: User) {
  return this.userService.getUserById(dto)
}
} 

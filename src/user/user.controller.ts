import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDTO';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users routes')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    const data = await this.userService.getMany();
    return {
      message: 'Usuario en sistema',
      data,
    };
  }

  @Post()
  async store(@Body() body: CreateUserDto) {
    const data = await this.userService.create(body);
    return {
      message: 'Usuario creado satisfactoriamente',
      data,
    };
  }
}

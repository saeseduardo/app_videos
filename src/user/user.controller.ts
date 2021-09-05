import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDTO';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Post()
  async store(@Body() body: CreateUserDto) {
    const data = await this.userService.create(body);
    return {
      message: 'Usuario creado satisfactoriamente',
      data,
    };
  }
}

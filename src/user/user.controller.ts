import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDTO';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Users routes')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'Lista de usuarios registrados en sistema',
  })
  @Get()
  async getAll() {
    const data = await this.userService.getMany();
    return {
      message: 'Lista de usuarios registrados en sistema',
      data,
    };
  }

  @ApiOkResponse({
    description: 'Usuario creado satisfactoriamente',
  })
  @ApiBearerAuth()
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

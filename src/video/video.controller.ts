import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { VideoService } from './video.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Video routes')
@Controller('video')
export class VideoController {
  constructor(private readonly moviService: VideoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    const data = await this.moviService.getAll();

    return {
      message: 'Listado de peliculas',
      data,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':expression')
  async getOne(@Param('expression') expression: any) {
    const data = await this.moviService.findOne(expression);

    return {
      message: 'Pelicula encontrada con exito',
      data: data.results,
    };
  }
}

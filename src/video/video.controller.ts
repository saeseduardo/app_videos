import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { VideoService } from './video.service';
import {
  ApiBearerAuth,
  ApiParam,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Video routes')
@Controller('video')
export class VideoController {
  constructor(private readonly moviService: VideoService) {}

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Listado de peliculas',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    const data = await this.moviService.getAll();

    return {
      message: 'Listado de peliculas',
      data,
    };
  }

  @ApiBearerAuth()
  @ApiParam({
    name: 'expression',
    required: true,
    description: 'Un identificador del video',
    schema: { oneOf: [{ type: 'string' }] },
  })
  @ApiOkResponse({
    description: 'Pelicula encontrada con exito',
  })
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

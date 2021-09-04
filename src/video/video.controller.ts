import { Controller, Get } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly moviService: VideoService) {}

  @Get()
  async getAll() {
    const data = await this.moviService.getAll();

    return {
      message: 'Listado de peliculas',
      data,
    };
  }
}

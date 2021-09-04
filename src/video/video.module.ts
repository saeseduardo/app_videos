import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [HttpModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}

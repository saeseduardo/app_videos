import { VideoModule } from './video/video.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, VideoModule, AuthModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

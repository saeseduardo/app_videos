import { CreateCommentDto } from './dto/createCommentDto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getOne(videoId: string) {
    const commentsForVideo = await this.commentRepository.find({ videoId });

    if (!commentsForVideo) {
      throw new NotFoundException(
        'La pelicula suministrada no tiene comentarios',
      );
    }
    return commentsForVideo;
  }

  async create(body: CreateCommentDto) {
    const newComment = this.commentRepository.create(body);
    const comment = await this.commentRepository.save(newComment);
    return comment;
  }
}

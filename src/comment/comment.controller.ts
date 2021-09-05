import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createCommentDto';

@ApiTags('Commenst routes')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: any) {
    const data = await this.commentService.getOne(id);

    return {
      message: 'Comentarios asociados al video seleccionado',
      data,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async store(@Body() body: CreateCommentDto) {
    const data = await this.commentService.create(body);

    return {
      message: 'Comentario creado exitosamnete',
      data,
    };
  }
}

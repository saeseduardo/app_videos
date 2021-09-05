import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiTags,
  ApiParam,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createCommentDto';

@ApiTags('Commenst routes')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiParam({
    name: 'id',
    required: true,
    description:
      'Requiere un identificador del video del cual se quiere conocer los comentarios realizados',
    schema: { oneOf: [{ type: 'string' }] },
  })
  @ApiBasicAuth()
  @ApiOkResponse({
    description: 'Lista de comentarios asociados al video seleccionado',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: any) {
    const data = await this.commentService.getOne(id);

    return {
      message: 'Lista de comentarios asociados al video seleccionado',
      data,
    };
  }

  @ApiBasicAuth()
  @ApiOkResponse({
    description: 'Comentario creado exitosamnete',
  })
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

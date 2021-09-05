import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    type: String,
    description: 'El id de un video',
    default: '',
  })
  @IsString()
  videoId: string;

  @ApiProperty({
    type: Number,
    description: 'El id de un usuario registrado',
    default: '',
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: String,
    description: 'El el comentario del video',
    default: '',
  })
  @IsString()
  @MaxLength(355)
  comment: string;
}

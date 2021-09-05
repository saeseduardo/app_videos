import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  videoId: string;

  @IsNumber()
  userId: number;

  @IsString()
  @MaxLength(355)
  comment: string;
}

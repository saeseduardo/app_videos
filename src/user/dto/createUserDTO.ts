import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Nombre de usuario',
    default: '',
  })
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    type: String,
    description: 'Apellido de usuario',
    default: '',
  })
  @IsString()
  @MaxLength(255)
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Nombre de usuario de usuario',
    default: '',
  })
  @IsString()
  @MaxLength(255)
  userName: string;

  @ApiProperty({
    type: String,
    description: 'Correo de usuario',
    default: '',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Contraseña de usuario',
    default: '',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}

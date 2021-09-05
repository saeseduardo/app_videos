import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'Email de usuario registrado en el sistema',
    default: '',
  })
  email: string;
  @ApiProperty({
    type: String,
    description:
      'Contraseña de usuario registrado en el sistema no menor a 8 digitos',
    default: '',
  })
  password: string;
}

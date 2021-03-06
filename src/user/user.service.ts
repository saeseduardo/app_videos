import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDTO';
import { User } from './entities/user.entity';

export interface UserFindOne {
  id?: number;
  email?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne(id)
      .then((u) =>
        !userEntity ? u : !!u && userEntity.id === u.id ? u : null,
      );

    if (!user)
      throw new NotFoundException('User does not exists or unauthorized');

    return user;
  }

  async create(body: CreateUserDto) {
    const userExit = await this.userRepository.findOne({ email: body.email });
    if (userExit) {
      throw new BadRequestException('El correo ya se encuentra registrado');
    }

    const newUser = this.userRepository.create(body);
    const user = await this.userRepository.save(newUser);
    return user;
  }

  async findOne(data: UserFindOne) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne();
  }
}

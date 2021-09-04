import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDTO';
import { User } from './entities/user.entity';

export interface UserFindOne {
  id?: number;
  username?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
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

import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/entities';
import { USER_EMAIL, USER_PASSWORD } from '../config/constants';

const setDefaultUser = async (config: ConfigService) => {
  const userRepository = getRepository<User>(User);

  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('email = :email', {
      email: config.get<string>(USER_EMAIL),
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      email: config.get<string>(USER_EMAIL),
      password: config.get<string>(USER_PASSWORD),
    });

    return await userRepository.save(adminUser);
  }
};

export default setDefaultUser;

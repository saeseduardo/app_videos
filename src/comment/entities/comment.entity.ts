import { User } from 'src/user/entities';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
} from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, (User) => User.comment, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: User;

  @Column({
    name: 'video_id',
  })
  videoId: string;

  @Column({
    name: 'user_id',
  })
  userId: number;

  @Column()
  comment: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

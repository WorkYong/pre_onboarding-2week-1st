import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocksRepository } from '../blocks/blocks.repository';
import { UsersRepository } from './users.repository';
import { FollowsController } from './follows.controller';
import { FollowsRepository } from './follows.repository';
import { FollowsService } from './follows.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowsRepository, UsersRepository, BlocksRepository])],
  controllers: [FollowsController],
  providers: [FollowsService]
})
export class FollowsModule {}

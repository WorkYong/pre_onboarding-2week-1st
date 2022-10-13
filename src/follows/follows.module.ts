import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocksRepository } from '../blocks/blocks.repository';
// import { UsersRepository } from '../users/users.repository';
/*  users 쪽 겹치면 충돌날거 같아서 제쪽에선 빼고 올립니다! 나중에 다합칠 때 이부분에 만들어진 usersrepository 추가하면됩니다!   */
import { FollowsController } from './follows.controller';
import { FollowsRepository } from './follows.repository';
import { FollowsService } from './follows.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowsRepository, UsersRepository, BlocksRepository])],
  controllers: [FollowsController],
  providers: [FollowsService]
})
export class FollowsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersRepository } from '../users/users.repository';
/*  users 쪽 겹치면 충돌날거 같아서 제쪽에선 빼고 올립니다! 나중에 다합칠 때 이부분에 만들어진 usersrepository 추가하면됩니다!   */
import { BlocksController } from './blocks.controller';
import { BlocksRepository } from './blocks.repository';
import { BlocksService } from './blocks.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlocksRepository, UsersRepository])],
  controllers: [BlocksController],
  providers: [BlocksService]
})
export class BlocksModule {}

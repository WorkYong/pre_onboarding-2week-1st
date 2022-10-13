import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BlocksRepository } from '../blocks/blocks.repository';
import { UsersRepository } from './users.repository';
import { FollowsRepository } from './follows.repository';

@Injectable()
export class FollowsService {
  constructor(
    private followsRepository: FollowsRepository,
    private usersRepository: UsersRepository,
    private blocksRepository: BlocksRepository
  ) {}

  async getUserIdByEmail(email: string): Promise<number> {

    const receiveUserId = await this.usersRepository.findOne({email:email});

    return receiveUserId.id;
  }

  async userFollowed(email: string, applyUserId: number): Promise<void>{

    const receiveUserId = await this.getUserIdByEmail(email);

    const blockedCheck = await this.blocksRepository
    .createQueryBuilder('blocks')
    .where('receive_user_id = :apply_user_id AND apply_user_id = :receive_user_id', {apply_user_id: applyUserId, receive_user_id: receiveUserId})
    .getCount();

    if(blockedCheck == 1) { // 차단 당한 사람은 followe 못함
      throw new HttpException('user followed failfully', HttpStatus.FORBIDDEN);
    } else {
      const followedCheck = await this.followsRepository
      .createQueryBuilder('follows')
      .where('apply_user_id = :apply_user_id AND receive_user_id = :receive_user_id', {apply_user_id: applyUserId, receive_user_id: receiveUserId})
      .getCount();

      if(followedCheck == 1) { // 이미 팔로우 한사람을 팔로우 하려고 할 경우 error
        throw new HttpException('You are already followed', HttpStatus.FORBIDDEN);
      } else {
        await this.followsRepository
        .createQueryBuilder()
        .insert()
        .into('follows')
        .values([
          {apply_user_id: applyUserId, receive_user_id:receiveUserId}
        ])
        .execute();
      }
    }
  }

  async userUnFollowed(email: string, applyUserId: number): Promise<void>{
    const receiveUserId = await this.getUserIdByEmail(email);

    await this.followsRepository
    .createQueryBuilder()
    .delete()
    .from('follows')
    .where('apply_user_id = :apply_user_id AND receive_user_id = :receive_user_id', {apply_user_id: applyUserId, receive_user_id: receiveUserId})
    .execute();
  
  }

}
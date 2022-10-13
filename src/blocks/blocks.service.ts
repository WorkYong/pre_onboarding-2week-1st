import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { BlocksRepository } from './blocks.repository';

@Injectable()
export class BlocksService {
  constructor(
    private blocksRepository: BlocksRepository,
    private usersRepository: UsersRepository,
  ) {}

  async userBlocked(email: string, applyUserId: number): Promise<void>{

    const receiveUserId = await this.usersRepository.findOne({email:email});

    await this.blocksRepository.createQueryBuilder()
    .insert()
    .into('blocks')
    .values([
      {apply_user_id: applyUserId, receive_user_id:receiveUserId.id}
    ])
    .execute();
  }

  async userUnBlocked(email: string, applyUserId: number): Promise<void>{

    const receiveUserId = await this.usersRepository.findOne({email:email});

    await this.blocksRepository
    .createQueryBuilder()
    .delete()
    .from('blocks')
    .where('apply_user_id = :apply_user_id AND receive_user_id = :receive_user_id', {apply_user_id: applyUserId, receive_user_id: receiveUserId.id})
    .execute();
  }
}

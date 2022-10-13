import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { GetUserByEmail } from 'src/users/dto/get-user-by-email';
import { BlocksService } from './blocks.service';

@Controller('blocks')
export class BlocksController {
  constructor(private blocksService: BlocksService) {
    this.blocksService = blocksService;
  }

 @Post()
 async userBlocked(@Body() data: GetUserByEmail): Promise<string>{

  await this.blocksService.userBlocked(data.email, data.apply_user_id);

  return Object.assign({
    statusCode: 201,
    statusMsg: `user blocked successfully`,
  });
 }

 @Delete()
 async userUnBlocked(@Body() data: GetUserByEmail): Promise<string>{

  await this.blocksService.userUnBlocked(data.email, data.apply_user_id);

  return Object.assign({
    statusCode: 200,
    statusMsg: `user unblocked successfully`,
  });
 }
}

import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { GetUserByEmail } from '../common/get-user-by-email';
import { FollowsService } from './follows.service';

@Controller('follows')
export class FollowsController {
  constructor(private followsService: FollowsService) {
    this.followsService = followsService;
  }

 @Post()
 async userFollowed(@Body() data: GetUserByEmail): Promise<string>{

  await this.followsService.userFollowed(data.email, data.apply_user_id);

  return Object.assign({
    statusCode: 201,
    statusMsg: `user followed successfully`,
  });
 }

 @Delete()
 async userUnFollowed(@Body() data: GetUserByEmail): Promise<string>{

  await this.followsService.userUnFollowed(data.email, data.apply_user_id);

  return Object.assign({
    statusCode: 200,
    statusMsg: `user unfollowed successfully`,
  });
 }
}

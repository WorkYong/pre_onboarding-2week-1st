import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { BlocksController } from './blocks.controller';
import { BlocksRepository } from './blocks.repository';
import { BlocksService } from './blocks.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlocksRepository, UsersRepository])],
  controllers: [BlocksController],
  providers: [BlocksService]
})
export class BlocksModule {}

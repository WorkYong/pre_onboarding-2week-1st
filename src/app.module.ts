import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { BlocksModule } from "./blocks/blocks.module";
import { BoardsModule } from "./boards/boards.module";
import { typeORMConfig } from "./configs/typeorm.config";
import { FollowsModule } from "./follows/follows.module";
import { CommentModule } from "./comment/comment.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
    BoardsModule,
    BlocksModule,
    FollowsModule,
    CommentModule,
  ],
})
export class AppModule {}

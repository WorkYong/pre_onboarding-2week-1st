import { Body, Controller, Delete, Param, Patch, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentCreateDto } from "./dto/comment.create.dto";
import { ReactionCreateDto } from "./dto/reaction.create.dto";

@Controller("comment")
export class CommentController {
  constructor(private commentService: CommentService) {
    this.commentService = commentService;
  }

  @Post("/:id")
  async createComment(
    @Param("id") post_id: number,
    @Body() commentCreateDto: CommentCreateDto
  ): Promise<void> {
    await this.commentService.createComment(commentCreateDto);
    return Object.assign({
      data: { post_id: post_id, ...commentCreateDto },
      statusCode: 201,
      statusMsg: `CREATED_COMMENT`,
    });
  }

  @Patch("/:id")
  async updateComment(
    @Param("id") post_id: number,
    @Body() commentCreateDto: CommentCreateDto
  ): Promise<void> {
    await this.commentService.updateComment(post_id, commentCreateDto);
    return Object.assign({
      data: { post_id: post_id, ...commentCreateDto },
      statusCode: 200,
      statusMsg: `UPDATED_COMMENT`,
    });
  }

  @Delete("/:id")
  async deleteComment(@Param("id") id: number) {
    await this.commentService.deleteComment(+id);
    return Object.assign({
      data: { id: id },
      statusCode: 204,
      statusMsg: `DELETED_COMMENT`,
    });
  }

  @Post("/reaction/:id")
  async createReaction(
    @Param("id") post_id: number,
    @Body() reactionCreateDto: ReactionCreateDto
  ): Promise<string> {
    await this.commentService.createReaction(reactionCreateDto);
    return Object.assign({
      data: { post_id: post_id, ...reactionCreateDto },
      statusCode: 201,
      statusMsg: `CREATED_REACTION`,
    });
  }

  @Delete("/reaction/:id")
  async deleteReaction(@Param("id") id: number) {
    await this.commentService.deleteReaction(+id);
    return Object.assign({
      data: { id: id },
      statusCode: 204,
      statusMsg: `DELETED_REACTION`,
    });
  }
}

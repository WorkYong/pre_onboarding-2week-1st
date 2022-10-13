import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, content, user_id, status } = createBoardDto;

    const board = this.create({
      title,
      content,
      user_id,
      status,
    });

    await this.save(board);
    return board;
  }
}

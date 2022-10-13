import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getAllBoards(): Promise<Board[]> {
    const boards = await this.boardRepository.find();
    return boards;
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`CAN NOT FIND BOARD WITH ID ${id}`);
    }

    return found;
  }

  async deleteBoardById(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`CAN NOT FIND BOARD ID WITH ${id}`);
    }
  }

  async updateBoard(id: number, title: string, content: string, status: boolean): Promise<Board> {
    const board = await this.getBoardById(id);

    board.title = title;
    board.content = content;
    board.status = status;

    await this.boardRepository.save(board);
    return board;
  }
}

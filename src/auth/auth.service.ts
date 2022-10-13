import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { UserRepository } from './user.repository';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp
    (userCreateDto: UserCreateDto): Promise<void> {
        return this.userRepository.createUser(userCreateDto);
    }
}
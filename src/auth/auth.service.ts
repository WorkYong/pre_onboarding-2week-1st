import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    async signUp
    (userCreateDto: UserCreateDto): Promise<void> {
        return this.userRepository.createUser(userCreateDto);
    }
    
    async signIn(userCreateDto: UserCreateDto): Promise<{accessToken: string}> {
        const { email, password } = userCreateDto;
        const user = await this.userRepository.findOne({ email });

        if(user && (await bcrypt.compare(password, user.password))) {
            const payload = { email };
            const accessToken = await this.jwtService.sign(payload);

            return { accessToken } ;
        } else {
            throw new UnauthorizedException('please check your email or password')
        }
    }

}

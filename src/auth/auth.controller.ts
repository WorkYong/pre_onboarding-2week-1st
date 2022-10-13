import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService)
    {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) userCreateDto: UserCreateDto): Promise<void> {
        return this.authService.signUp(userCreateDto);
    }
}   

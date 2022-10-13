import { Body, Controller, HttpCode, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService)
    {}

    @Post('/signup')
    @HttpCode(201)
    signUp(@Body(ValidationPipe) userCreateDto: UserCreateDto): Promise<void> {
        return this.authService.signUp(userCreateDto);
    }
    
    @Post('/signin')
    @HttpCode(200)
    signIn(@Body(ValidationPipe) userCreateDto: UserCreateDto): Promise<{accessToken: string}> {
        return this.authService.signIn(userCreateDto);
    }

}   

import { IsBoolean, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserCreateDto {
    @IsString()
    @MinLength(1)
    @MaxLength(40)
    @Matches( /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, {message : 'invaild_email'})
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(30)
    password: string;

    is_active: boolean;
    createdAt: Date;
    updatedAt: Date;


    
}
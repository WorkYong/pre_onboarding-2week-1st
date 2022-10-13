import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config'

const jwtConfig = config.get('jwt')

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || jwtConfig.secret,
    signOptions: {
      expiresIn : jwtConfig.expiresIn
    }

  }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

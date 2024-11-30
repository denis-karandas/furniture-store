import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from "./token.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshToken } from './refreshToken.entity';
import { UserModule } from 'modules/user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([RefreshToken]),
        JwtModule,
        UserModule,
    ],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule {}

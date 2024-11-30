import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from 'modules/user/user.entity';
import { RefreshToken } from './refreshToken.entity';
import { ITokenPayload } from './token.interfaces';

@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(RefreshToken)
        private readonly refreshTokenRepository: Repository<RefreshToken>,
        private readonly jwtService: JwtService,
    ) {}

    generateAccessToken(payload: object): string {
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
        });
    }

    generateRefreshToken(payload: Object): string {
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
        });
    }

    findOne(options: FindOneOptions<RefreshToken> = {}): Promise<RefreshToken> {
        return this.refreshTokenRepository.findOne(options);
    }

    async saveRefreshToken(user: User, refreshToken: string): Promise<RefreshToken> {
        const token = await this.refreshTokenRepository.findOneBy({
            user: { id: user.id },
        });
        if (token) {
            token.value = refreshToken;
            return this.refreshTokenRepository.save(token);
        }

        return this.refreshTokenRepository.save({
            value: refreshToken,
            user,
        });
    }

    async deleteTokenByValue(refreshToken: string) {
        return this.refreshTokenRepository.delete({ value: refreshToken });
    }

    static getTokenPayload(user: User): ITokenPayload {
        return { id: user.id };
    }
}

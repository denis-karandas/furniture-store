import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService) {}

    generateAccessToken(payload: object) {
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_ACCESS_TOKEN_SECRET,
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
        });
    }
}

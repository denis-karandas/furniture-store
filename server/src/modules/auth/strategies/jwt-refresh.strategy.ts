import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { User } from 'modules/user/user.entity';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				JwtRefreshStrategy.extractJWT,
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			]),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_REFRESH_TOKEN_SECRET,
		});
	}

	async validate({ id }: { id: number; }): Promise<User> {
		return this.authService.validateUserById(id);
	}

	private static extractJWT(req: Request): string | null {
		if (req.cookies && req.cookies.refreshToken) {
			return req.cookies.refreshToken;
		}
		return null;
	}
}

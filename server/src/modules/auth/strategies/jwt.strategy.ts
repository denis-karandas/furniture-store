import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../auth.service';
import { User } from 'modules/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				JwtStrategy.extractJWT,
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			]),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
		});
	}

	async validate({ id }: { id: number; }): Promise<User> {
		return this.authService.validateUserById(id);
	}

	private static extractJWT(req: Request): string | null {
		if (req.cookies && req.cookies.accessToken) {
			return req.cookies.accessToken;
		}
		return null;
	}
}

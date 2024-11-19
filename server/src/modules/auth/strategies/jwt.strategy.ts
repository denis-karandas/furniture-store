import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
		});
	}

	async validate({ email }: { email: string; }) {
		const user = await this.authService.validateUserByEmail(email);
		if (!user) {
			throw new UnauthorizedException();
		}
		
		return user;
	}
}
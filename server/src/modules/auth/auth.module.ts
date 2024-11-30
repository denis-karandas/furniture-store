import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { TokenModule } from "modules/token/token.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { UserModule } from "modules/user/user.module";
import { JwtRefreshStrategy } from "./strategies/jwt-refresh.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule,
        TokenModule,
        UserModule,
    ],
    controllers: [AuthController],
    providers: [
        LocalStrategy,
        JwtStrategy,
        JwtRefreshStrategy,
        AuthService
    ],
})
export class AuthModule {}
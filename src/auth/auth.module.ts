import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { jwtConstants } from './jwtConsts';
import { JwtStrategy } from './jwt.strategy';
import { RFJwtStrategy } from './rfjwt.strategy';

@Module({
	controllers: [AuthController],
	providers: [AuthService, UsersService, PrismaService, JwtStrategy, RFJwtStrategy],
	imports: [
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '1h', algorithm: 'HS256' },
		}),
		JwtModule.register({
			secret: jwtConstants.refreshSecret,
			signOptions: { expiresIn: '7d', algorithm: 'HS256' }
		})
	],
})
export class AuthModule {}

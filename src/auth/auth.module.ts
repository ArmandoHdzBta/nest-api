import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { jwtConstants } from './jwtConsts';
import { JwtStrategy } from './jwt.strategy';

@Module({
	controllers: [AuthController],
	providers: [AuthService, UsersService, PrismaService, JwtStrategy],
	imports: [
		JwtModule.register({
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '1h' },
		}),
	],
})
export class AuthModule {}

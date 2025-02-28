import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
	) {}

	async signIn(payload: object) {
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}

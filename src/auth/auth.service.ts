import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
	) {}

	async accessToken(payload: object) {
		return this.jwtService.sign(payload)
	}
	
	async refreshAccessToken(payload: object) {
		return this.jwtService.sign(payload, { expiresIn: '1d', algorithm: 'HS256' })
	}

	async getTokens(payload: object) {
		return {
			access_token: await this.accessToken(payload),
			refresh_token: await this.refreshAccessToken(payload),
		};
	}
}

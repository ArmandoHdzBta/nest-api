import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './jwtConsts'; 
import { Request } from 'express';

@Injectable()
export class RFJwtStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.refreshSecret,
            passReqToCallback: true
        });
    }

    async validate(req: Request, payload: any) {
        const refreshToken = req.get('Authorization')?.replace("Bearer", "").trim();
        return {
            ...payload,
            refreshToken
        };
    }
}

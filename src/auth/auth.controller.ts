import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { HttpResponse } from 'src/Response/HttpResponse';
import { NewUserDto } from 'src/users/dto/newUser.dto';
import { UsersService } from 'src/users/users.service';
import { UserAuthDto } from './dto/UserAuthDto.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService, private authService: AuthService) {}
    
    @Post("login")
    async login(@Body() userAuth: UserAuthDto) {
        const user = await this.userService.findByEmail(userAuth.email);
        
        if(!user){
            throw new HttpException("User not found", 404);
        }

        const isPasswordValid = await bcrypt.compare(userAuth.password, user?.password);

        if (!isPasswordValid) {
			throw new HttpException("Invalid credentials", 403)
		}

        const payload = { sub: user.id, username: user.name };

        const data = await this.authService.signIn(payload)
        
        return {
            ...data
        }
    }

    @Post("register")
    async register(@Body() newUser: NewUserDto) {
        const { password } = newUser;

        const passwordHash = await bcrypt.hash(password, 10);

        const user: NewUserDto = {...newUser, password: passwordHash};
        
        return new HttpResponse(
            "User registered",
            await this.userService.createUser(user)
        )
        .json();
    }
}

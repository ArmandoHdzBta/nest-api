import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NewUserDto } from './dto/newUser.dto';
import { UserDto } from './dto/user.dto';

export type User = any

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUser(newUser: NewUserDto) {
    return this.prisma.user.create({ data: newUser });
  }

  findByEmail(email: string){
    return this.prisma.user.findFirst({ where: { email } });
  }
}

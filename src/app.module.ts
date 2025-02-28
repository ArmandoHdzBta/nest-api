import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class AppModule {}

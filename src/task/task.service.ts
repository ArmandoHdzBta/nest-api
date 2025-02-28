import { Injectable } from '@nestjs/common';
import { newTaskDto } from './dto/newTask.dto';
import { PrismaService } from 'src/prisma.service';
import { updateTaskDto } from './dto/updateTaskDto.dto';

@Injectable()
export class TaskService {

  constructor(private prisma: PrismaService) {}

  getTasks() {
    return this.prisma.task.findMany({ orderBy: { createdAt: 'desc'} });
  }

  getTask(id: number) {
    return this.prisma.task.findUnique({ where: { id } })
  }

  createTask(task: newTaskDto) {
    return this.prisma.task.create({data: task});
  }

  updateTask(id: number, task: updateTaskDto) {
      return this.prisma.task.update({ where: { id }, data: task });
  }

  deleteTask(id: number) {
      return this.prisma.task.delete({ where: { id } });
  }
}

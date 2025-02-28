import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { newTaskDto } from './dto/newTask.dto';
import { updateTaskDto } from './dto/updateTaskDto.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { HttpResponse } from 'src/Response/HttpResponse';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Get()
	@ApiResponse({ status: 200, description: 'All tasks' })
	async getTasks() {
		return new HttpResponse(
			'Task',
			await this.taskService.getTasks(),
		).json();
	}

	@Get('/:id')
	@ApiResponse({ status: 200, description: 'Task found with the given id' })
	async getTask(@Param('id', ParseIntPipe) id: number) {
		return new HttpResponse(
			'Task',
			await this.taskService.getTask(id),
		).json();
	}

	@Post()
	@ApiResponse({ status: 201, description: 'Task created' })
	@ApiResponse({ status: 400, description: 'Something is wrong' })
	async createTask(@Body() request: newTaskDto) {
		return new HttpResponse(
			'Created',
			await this.taskService.createTask(request),
		).json();
	}

	@Patch('/:id')
	async updateTask(
		@Param('id', ParseIntPipe) id: number,
		@Body() request: updateTaskDto,
	) {
		return new HttpResponse(
			'Task updated',
			await this.taskService.updateTask(id, request),
		).json();
	}

	@Delete('/:id')
	async deleteTask(@Param('id', ParseIntPipe) id: number) {
		return new HttpResponse(
			'Task deleted',
			await this.taskService.deleteTask(id),
		).json();
	}
}

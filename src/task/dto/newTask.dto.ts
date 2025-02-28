import { ApiParam, ApiProperty, ApiPropertyOptional, ApiSchema } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

@ApiSchema({
  name: 'addTask',
})
export class newTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiPropertyOptional({
    default: false,
  })
  completed: boolean = false;
}
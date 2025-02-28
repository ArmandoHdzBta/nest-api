import { ApiProperty, ApiPropertyOptional, ApiSchema } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

@ApiSchema({
    name: "updateTask"
})
export class updateTaskDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({example: 1})
  id: number;

  @IsOptional()
  @ApiPropertyOptional()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional()
  completed?: boolean;
}
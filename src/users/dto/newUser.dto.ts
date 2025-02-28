import { ApiProperty, ApiPropertyOptional, ApiSchema } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@ApiSchema({
    name: "newUser"
})
export class NewUserDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
    @ApiProperty()
	email: string;

	@IsNotEmpty()
	@IsString()
    @ApiProperty()
	password: string;

	@IsNotEmpty()
	@IsString()
    @ApiProperty()
	name: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
	lastName: string = "";
}
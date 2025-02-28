import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@ApiSchema({
    name: "userAuth"
})
export class UserAuthDto {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
    @ApiProperty()
	email: string;

	@IsNotEmpty()
	@IsString()
    @ApiProperty()
	password: string;
}
import { ApiSchema } from "@nestjs/swagger";

@ApiSchema({
    name: "User"
})
export class UserDto {
    id: number;
    name: string;
    lastName?: string;
    email: string;
    password: string;
}
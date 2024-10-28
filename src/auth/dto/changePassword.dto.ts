import { IsString, Matches, IsNotEmpty, MinLength } from "class-validator";

export class ChangePasswordDto {
 @MinLength(6, { message: "Password cannot be less than 6 characters" })
 @IsString()
 readonly password: string;
}

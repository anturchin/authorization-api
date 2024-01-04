import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'неверно указан email' })
	email: string;
	@IsString({ message: 'не указан пароль' })
	password: string;
}

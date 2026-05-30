import { IsNotEmpty, IsString } from 'class-validator';
export class LoginGatewayDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

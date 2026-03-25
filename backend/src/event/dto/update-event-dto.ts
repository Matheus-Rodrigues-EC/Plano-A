import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UpdateEventDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsDate()
  date!: Date;

  @IsNotEmpty()
  @IsString()
  location!: string;

  @IsString()
  description!: string;
}

/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsDate()
  data!: Date;

  @IsNotEmpty()
  @IsString()
  local!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;
}

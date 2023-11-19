import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, Validate } from 'class-validator';

export class UpdateUserDto  {
    
    @IsNotEmpty({message: "Please provide your name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)
    Name?: string;

    // @IsNotEmpty({message: "Please provide your id"})
    // @IsNumber()
    // id: number;

    @IsNotEmpty({message: "Please provide your age"})
    @IsNumber()
    age?: number;

    @IsNotEmpty({message: "Please provide your gender"})
    @IsString()
    Gender?: string;

    @IsNotEmpty({message: "Please provide your country name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)
    preference_country?: string;

    @IsNotEmpty({message: "Please provide your number"})
    @IsString()
    @MinLength(11)
    @MaxLength(11)
    phone_number?: number;

    @IsNotEmpty({message: "Please provide your password"})
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    password?: string;

} 
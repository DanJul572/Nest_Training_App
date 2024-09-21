import { ApiProperty } from '@nestjs/swagger';
import { IsBase64, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    label: string;

    @ApiProperty()
    @IsBase64()
    image: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;
}

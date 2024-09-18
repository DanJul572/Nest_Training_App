import { IsBase64, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    label: string;

    @IsBase64()
    image: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    type: string;
}

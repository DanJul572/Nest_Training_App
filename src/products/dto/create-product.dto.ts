import { ApiProperty } from '@nestjs/swagger';
import {
    IsBase64,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';
import { Prisma } from '@prisma/client'; // Import Prisma types

export class CreateProductDto implements Prisma.ProductCreateInput {
    // Use Prisma's input type
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    label: string;

    @ApiProperty()
    @IsBase64()
    @IsOptional()
    image?: Buffer;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;
}

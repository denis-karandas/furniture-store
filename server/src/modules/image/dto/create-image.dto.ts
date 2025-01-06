import { IsNumberString, IsString } from 'class-validator';

export class CreateImageDto {
    @IsString()
    folder_name: string;

    @IsString()
    file_name: string;

    @IsString()
    file_extension: string;
}

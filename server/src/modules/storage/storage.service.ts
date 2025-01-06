import { Injectable } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { join } from 'path';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { tmpdir } from 'os';
import { diskStorage } from 'multer';
import { dayjs } from 'libs';
import { StringService } from 'modules/string/string.service';
import { IStorageFolder } from './storage.interfaces';
import { Dayjs } from 'dayjs';


@Injectable()
export class StorageService {
    static async createFolder(): Promise<IStorageFolder> {
        const year = dayjs.utc().year();
        const month = dayjs.utc().month();
        const date = dayjs.utc().date();

        const getAvailableNameAndPath = () => {
            const name = StringService.geterateRandomString(24);
            const path = join('uploads', year.toString(), month.toString(), date.toString(), name);

            return existsSync(path) ? getAvailableNameAndPath() : { name, path };
        };

        const { name, path } = getAvailableNameAndPath();

        await mkdir(path, { recursive: true });

        return { name, path };
    }

    static async generateFileName(folderPath: string): Promise<string> {
        const getAvailableName = () => {
            const name = StringService.geterateRandomString(24);
            const path = join(folderPath, name);

            return existsSync(path) ? getAvailableName() : name;
        };

        return getAvailableName();
    }

    static getPath(date: Dayjs, folderName: string, fileName: string, fileExtension: string): string {
        return join(
            'uploads',
            date.year().toString(),
            date.month().toString(),
            date.date().toString(),
            folderName,
            fileName + '.' + fileExtension
        );
    }

    static tempStorage(): MulterOptions['storage'] {
        return diskStorage({
            destination: async (req, file, cb) => {
                const getAvailablePath = () => {
                    const folderName = StringService.geterateRandomString(24);
        
                    const path = join(tmpdir(), folderName);
        
                    return existsSync(path) ? getAvailablePath() : path;
                };
        
                const path = getAvailablePath();
        
                mkdir(path)
                    .then(() => cb(null, path))
                    .catch(err => cb(err, null));
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        });
    }
}

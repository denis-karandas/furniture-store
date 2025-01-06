import { Injectable } from '@nestjs/common';

@Injectable()
export class StringService {
    static geterateRandomString(length = 16): string {
        const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
        const randomArray = Array.from(
            { length },
            (v, k) => chars[Math.floor(Math.random() * chars.length)],
        );

        return randomArray.join('');
    }

    static slugify = (value: string, separator = '-'): string => {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, separator)
            .replace(/^-+|-+$/g, '');
    };
}

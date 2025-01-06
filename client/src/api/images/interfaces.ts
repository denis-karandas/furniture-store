export enum Extension {
    WEBP = 'webp',
}

export interface IImage {
    id: number;
    folder_name: string;
    file_name: string;
    file_extension: Extension.WEBP;
    created_at: string;
    updated_at: string;
}
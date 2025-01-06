import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('images')
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    folder_name: string;

    @Column()
    file_name: string;

    @Column()
    file_extension: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
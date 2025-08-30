import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('procedures')
export class ProceduresEntity {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'active', type: 'boolean', nullable: false, default: true })
    active: boolean;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  todo: string;
  @Column()
  description: string;
  @Column({ default: false })
  isCompleted: boolean;
}

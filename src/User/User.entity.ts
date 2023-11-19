import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity()
export class User{
   
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    Name: string;

    @Column()
    age: number;
   
    @Column()
    Gender: string;
    
    @Column()
    preference_country: string;

    @Column()
    phone_number: number;

    @Column()
    password: string;
}
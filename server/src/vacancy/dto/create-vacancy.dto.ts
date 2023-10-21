import { IsNumber, IsString } from "class-validator";

export class CreateVacancyDto {
    @IsString()
    title: string

    @IsNumber()
    salary: number

    @IsString()
    desc: string

    @IsString()
    skills: string

    @IsString()
    address: string

    @IsString()
    workExperience: string

    @IsString()
    employment: string

    @IsString()
    workTimetable: string

    @IsString()
    education: string

    professionId: number

    employerId: number
}
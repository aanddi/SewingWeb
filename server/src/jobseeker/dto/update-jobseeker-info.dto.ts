import { IsDate, IsOptional, IsString } from "class-validator"

export class updateJobseekerDto {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    surname: string

    @IsOptional()
    @IsString()
    patronymic: string

    @IsOptional()
    @IsString()
    sex: string

    @IsOptional()
    @IsDate()
    DOB: Date

    @IsOptional()
    @IsString()
    city: string

    @IsOptional()
    @IsString()
    citizenship: string
    
    @IsOptional()
    @IsString()
    languages: string
}

export class updateWorkExperienceDto {
    @IsString()
    city: string

    @IsString()
    company: string

    @IsString()
    post: string

    @IsDate()
    startTime: Date

    @IsDate()
    endTime: Date
    
    @IsString()
    experience: string
}

export class updateInstitutionalInfoDto {
    @IsString()
    educationLevel: string

    @IsString()
    institutionName: string

    @IsString()
    faculty: string
    
    @IsString()
    specialization: string
}
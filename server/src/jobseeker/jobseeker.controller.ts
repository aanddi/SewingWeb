import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { UpdateAbout } from './dto/about.dto'
import { EducationDto } from './dto/education.dto'
import { UpdateResume } from './dto/update-resume.dto'
import { JobseekerService } from './jobseeker.service'
import { ExperienceDto } from './dto/experience.dto'

@Controller('jobseeker')
export class JobseekerController {
  constructor(private readonly jobseekerService: JobseekerService) {}

  @Get('/getResume/:id')
  async getResume(@Param('id') id: number) {
    return this.jobseekerService.getResume(id)
  }

  @UsePipes(new ValidationPipe())
  @Put('updateResume/:id')
  @Auth()
  async updateResume(@Param('id') id: number, @Body() dto: UpdateResume) {
    return this.jobseekerService.updateResume(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @Patch('updateResumeAbout/:id')
  @Auth()
  async updateResumeAbout(@Param('id') id: number, @Body() dto: UpdateAbout) {
    return this.jobseekerService.updateResumeAbout(id, dto)
  }

  //======= Education =================================================

  @Get('getAllEducationById/:id') // id resume
  @Auth()
  async getAllEducationById(@Param('id') id: number) {
    return this.jobseekerService.getAllEducationById(id)
  }

  @Get('getEducationById/:id') // id edication
  @Auth()
  async getEducationById(@Param('id') id: number) {
    return this.jobseekerService.getEducationById(id)
  }

  @UsePipes(new ValidationPipe())
  @Post('createEducation/:id') // id resume
  @HttpCode(200)
  @Auth()
  async createEducation(@Param('id') id: number, @Body() dto: EducationDto) {
    return this.jobseekerService.createEducation(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @Put('updateEducation/:id') // id education
  @Auth()
  async updateEducation(@Param('id') id: number, @Body() dto: EducationDto) {
    return this.jobseekerService.updateEducation(id, dto)
  }

  @Delete('deleteEducation/:id') // id education
  @Auth()
  async deleteEducation(@Param('id') id: number) {
    return this.jobseekerService.deleteEducation(id)
  }

  //======= WorkExperience =================================================

  @Get('getAllExperienceById/:id') // id resume
  // @Auth()
  async getAllExperienceById(@Param('id') id: number) {
    return this.jobseekerService.getAllExperienceById(id)
  }

  @Get('getExperienceById/:id') // id experience
  // @Auth()
  async getExperienceById(@Param('id') id: number) {
    return this.jobseekerService.getExperienceById(id)
  }

  @UsePipes(new ValidationPipe())
  @Post('createExperience/:id') // id resume
  @HttpCode(200)
  // @Auth()
  async createExperience(@Param('id') id: number, @Body() dto: ExperienceDto) {
    return this.jobseekerService.createExperience(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @Put('updateExperience/:id') // id experience
  // @Auth()
  async updateExperience(@Param('id') id: number, @Body() dto: ExperienceDto) {
    return this.jobseekerService.updateExperience(id, dto)
  }

  @Delete('deleteExperience/:id') // id experience
  // @Auth()
  async deleteExperience(@Param('id') id: number) {
    return this.jobseekerService.deleteExperience(id)
  }
}

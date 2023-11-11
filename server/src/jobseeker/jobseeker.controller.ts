import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { UpdateAbout } from './dto/about-about'
import { UpdateResume } from './dto/update-resume.dto'
import { JobseekerService } from './jobseeker.service'

@Controller('jobseeker')
export class JobseekerController {
  constructor(private readonly jobseekerService: JobseekerService) {}

  @Get('/getResume/:id')
  async getResume(@Param('id') id: number) {
    return this.jobseekerService.getResume(id)
  }

  @Put('/updateResume/:id')
  @Auth()
  async updateResume(@Param('id') id: number, @Body() dto: UpdateResume) {
    return this.jobseekerService.updateResume(id, dto)
  }

  @Patch('/updateResumeAbout/:id')
  @Auth()
  async updateResumeAbout(@Param('id') id: number, @Body() dto: UpdateAbout) {
    return this.jobseekerService.updateResumeAbout(id, dto)
  }
}

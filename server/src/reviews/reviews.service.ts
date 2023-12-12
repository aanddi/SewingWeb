import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewsDto } from './dto/reviews.dto'

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getById(idEmployer: number) {
    const reviews = await this.prisma.reviews.findMany({
      where: {
        employerId: +idEmployer
      },
      orderBy: {
        id: 'desc'
      }
    })

    let totalRating = 0
    for (const review of reviews) {
      totalRating += review.grade // Предполагается, что поле с оценкой называется grade
    }
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

    const countReviews = await this.prisma.reviews.count({
      where: {
        employerId: +idEmployer
      }
    })

    return {
      reviews: reviews,
      averageRating: averageRating.toFixed(1),
      countReviews: countReviews
    }
  }

  async getMy(userId: number) {
    const getJobseeker = await this.getJobseeker(userId)

    const reviews = await this.prisma.reviews.findMany({
      where: {
        jobseekerId: getJobseeker.id
      },
      include: {
        employer: {
          select: {
            companyName: true
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    })

    return reviews
  }

  async create(dto: ReviewsDto) {
    const getJobseeker = await this.getJobseeker(dto.jobseekerId) // в dto передавется idUser

    const checkReviews = await this.prisma.reviews.findMany({
      where: {
        jobseekerId: getJobseeker.id,
        employerId: dto.employerId
      }
    })

    if (checkReviews.length > 0) throw new BadRequestException('Вы уже оставляли отзыв на эту компанию')

    const newReviews = await this.prisma.reviews.create({
      data: {
        employerId: +dto.employerId,
        jobseekerId: getJobseeker.id,
        profession: dto.profession,
        post: dto.post,
        grade: dto.grade,
        advantages: dto.advantages,
        flaws: dto.flaws,
        comment: dto.comment
      }
    })
    return newReviews
  }

  async delete(idReviews: number) {
    const deleteReviews = await this.prisma.reviews.delete({
      where: {
        id: +idReviews
      }
    })
    return deleteReviews
  }

  private async getJobseeker(idUser: number) {
    const jobseeker = await this.prisma.jobSeeker.findUnique({
      where: {
        userId: +idUser
      }
    })

    if (!jobseeker) throw new NotFoundException('Пользователь не найден')

    return jobseeker
  }
}

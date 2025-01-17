import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizzesService {
    constructor(private prisma: PrismaService) {}

    // attemp quiz
    async attemptQuiz() {
        // codes for attempting quiz
    }

    async getRankings() {
        // codes for getting rankings
    }

}
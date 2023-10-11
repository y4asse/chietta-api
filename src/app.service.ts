import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getFromPrisma(): string {
    return 'Hello World!';
  }
}

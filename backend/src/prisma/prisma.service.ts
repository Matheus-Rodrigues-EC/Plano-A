/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const prismaPg = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });
    super({ prismaPg });
  }

  async onModuleInit() {
    // Initialization logic for Prisma service
    console.log('PrismaService initialized');
    console.log('Connecting to database...');
    await this.$connect();
    console.log('Connected to database!');
  }

  async onModuleDestroy() {
    // Cleanup logic for Prisma service
    console.log('Disconnected from database...');
    await this.$disconnect();
    console.log('Disconnected from database!');
  }
}

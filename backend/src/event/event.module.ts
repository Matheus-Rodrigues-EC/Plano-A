import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';

@Module({
  imports: [PrismaModule],
  providers: [EventService, EventRepository],
  controllers: [EventController],
  exports: [EventService, EventRepository],
})
export class EventModule {}

/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateEventDto } from './dto/create-event-dto';
import { UpdateEventDto } from './dto/update-event-dto';
import { Event } from '@prisma/client';

@Injectable()
export class EventRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return await this.prismaService.event.create({
      data: createEventDto,
    });
  }

  async findAll(): Promise<Event[]> {
    return await this.prismaService.event.findMany();
  }

  async findOne(id: number): Promise<Event | null> {
    return await this.prismaService.event.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    return await this.prismaService.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: number): Promise<Event> {
    return await this.prismaService.event.delete({
      where: { id },
    });
  }
}

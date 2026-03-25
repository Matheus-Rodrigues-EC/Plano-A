import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';

import { CreateEventDto } from './dto/create-event-dto';
import { UpdateEventDto } from './dto/update-event-dto';
import { EventRepository } from './event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  getHealthEventService(): string {
    return 'Event Service is healthy';
  }

  async create(createEventDto: CreateEventDto) {
    if (!createEventDto.name) {
      throw new BadRequestException('Nome é obrigatório');
    }
    if (!createEventDto.date) {
      throw new BadRequestException('Data é obrigatória');
    }
    if (!createEventDto.location) {
      throw new BadRequestException('Local é obrigatório');
    }
    const eventDate = new Date(createEventDto.date);

    if (eventDate < new Date()) {
      throw new BadRequestException('Data não pode ser no passado');
    }

    return await this.eventRepository.create(createEventDto);
  }

  async findAll() {
    return await this.eventRepository.findAll();
  }

  async findOne(id: number) {
    if (!id) {
      throw new BadRequestException('ID é obrigatório');
    }
    if (isNaN(id)) {
      throw new BadRequestException('ID deve ser um número');
    }
    const event = await this.eventRepository.findOne(id);
    if (!event) {
      throw new NotFoundException(`Evento com ID ${id} não encontrado`);
    }

    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    if (!id) {
      throw new BadRequestException('ID é obrigatório');
    }
    if (isNaN(id)) {
      throw new BadRequestException('ID deve ser um número');
    }
    if (!updateEventDto.name) {
      throw new BadRequestException('Nome é obrigatório');
    }
    if (!updateEventDto.date) {
      throw new BadRequestException('Data é obrigatória');
    }
    if (!updateEventDto.location) {
      throw new BadRequestException('Local é obrigatório');
    }

    const event = await this.eventRepository.findOne(id);
    if (!event) {
      throw new NotFoundException(`Evento com ID ${id} não encontrado`);
    }
    const eventDate = new Date(updateEventDto.date);

    if (eventDate < new Date()) {
      throw new BadRequestException('Data não pode ser no passado');
    }

    return await this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: number) {
    if (!id) {
      throw new BadRequestException('ID é obrigatório');
    }
    if (isNaN(id)) {
      throw new BadRequestException('ID deve ser um número');
    }
    const event = await this.eventRepository.findOne(id);
    if (!event) {
      throw new NotFoundException(`Evento com ID ${id} não encontrado`);
    }

    return await this.eventRepository.remove(id);
  }
}

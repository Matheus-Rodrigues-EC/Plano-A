import { Injectable } from '@nestjs/common';

import { CreateEventDto } from './dto/create-event-dto';
import { UpdateEventDto } from './dto/update-event-dto';
import { EventRepository } from './event.repository';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: EventRepository) {}

  getHealthEventService(): string {
    return 'Event Service is healthy';
  }

  create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto);
  }

  findAll() {
    return this.eventRepository.findAll();
  }

  findOne(id: number) {
    return this.eventRepository.findOne(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepository.update(id, updateEventDto);
  }

  remove(id: number) {
    return this.eventRepository.remove(id);
  }
}

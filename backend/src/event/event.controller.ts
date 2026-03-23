import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event-dto';
import { UpdateEventDto } from './dto/update-event-dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('health')
  @HttpCode(200)
  health() {
    return this.eventService.getHealthEventService();
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(Number(id));
  }

  @Post()
  @HttpCode(201)
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Patch(':id')
  @HttpCode(202)
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    console.log('Updating event with ID:', id, typeof id);
    return this.eventService.update(Number(id), updateEventDto);
  }

  @Delete(':id')
  @HttpCode(202)
  remove(@Param('id') id: string) {
    return this.eventService.remove(Number(id));
  }
}

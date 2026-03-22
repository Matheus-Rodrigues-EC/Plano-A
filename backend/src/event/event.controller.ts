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

  @Get()
  @HttpCode(200)
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number) {
    return this.eventService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Patch(':id')
  @HttpCode(202)
  update(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @HttpCode(202)
  remove(@Param('id') id: number) {
    return this.eventService.remove(id);
  }
}

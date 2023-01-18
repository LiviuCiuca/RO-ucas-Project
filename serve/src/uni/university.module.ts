/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
    imports: [TypeOrmModule.forFeature([UniversityService])],
    controllers: [UniversityController],
    providers: [UniversityService],
})
export class UniversityModule { }

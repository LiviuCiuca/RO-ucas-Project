import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Universities } from 'src/entities/Universities';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

@Module({
    imports: [TypeOrmModule.forFeature([Universities])],
    controllers: [UniversityController],
    providers: [UniversityService],
})
export class UniversityModule { }

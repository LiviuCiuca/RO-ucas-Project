import { EnrollModule } from './enroll/enroll.module';
import { UniversityModule } from './uni/university.module';
import { UniversityService } from './uni/university.service';
import { UniversityController } from './uni/university.controller';
import { StudentModule } from './student/student.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entities/Student';
import { Universities } from './entities/Universities';

@Module({
  imports: [
    EnrollModule,
    UniversityModule,
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tastatura1!',
      database: 'students',
      entities: [Student, Universities],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

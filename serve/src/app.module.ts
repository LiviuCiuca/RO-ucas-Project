import { Uni_courseModule } from './uni_course/uni_course.module';
import { CourseModule } from './courses/course.module';
import { EnrollModule } from './enroll/enroll.module';
import { UniversityModule } from './uni/university.module';
import { StudentModule } from './student/student.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entities/Student';
import { Universities } from './entities/Universities';
import { Courses } from './entities/Courses';
import { Enrollment } from './entities/Enrollments';

@Module({
  imports: [
    Uni_courseModule,
    CourseModule,
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
      entities: [Student, Universities, Enrollment, Courses],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

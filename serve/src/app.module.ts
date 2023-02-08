import { CourseModule } from './logic/courses/course.module';
import { EnrollModule } from './logic/enroll/enroll.module';
import { UniversityModule } from './logic/uni/university.module';
import { StudentModule } from './logic/student/student.module';
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
      database: 'ro_ucas',
      entities: [Student, Universities, Enrollment, Courses],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

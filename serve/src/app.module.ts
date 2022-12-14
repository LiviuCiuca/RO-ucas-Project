import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entities/Student';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'Tastatura1!',
    database:'students',
    entities: [Student],
    synchronize:true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

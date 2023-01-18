/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/Student';
import { createStudentParams, updateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) {}
    
    //get all students
    getAllStudents() {
        return this.studentRepository.find();
    }
    //post a new student to mysql database
    postStudent(studentDetails : createStudentParams ) {
        const newStudent = this.studentRepository.create({...studentDetails });

        return this.studentRepository.save(newStudent);
        //save is async method, returns a promise
    }
    //get a student by id 
    getStudentById(id: number) {
        const student = this.studentRepository.findOne({where: {id}});
    }
    //update a student by id 
    updateStudentById(id: number ,studentDetails: updateStudentParams) {
      this.studentRepository.update({ id }, {...studentDetails});
      //if user changes just one field, just that field gets updated 
    }
    //delete a student by id 
    deleteStudentById(id:number) {
        this.studentRepository.delete({ id });
    }

 }

 //curl command 
 // post
 //Invoke-WebRequest -Method POST -Uri http://localhost:3000/student -Headers @{'Content-Type'='application/json'} -Body '{ "username": "liviu", "password": "cicua", "age": "27" }'

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/Student';
import { createStudentParams, updateStudentParams } from 'src/utils/studentTypes';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ) {}
    
    /**
    * Get all students
    * @returns Promise<Student[]>
    */
    getAllStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    /**
    * Create a new student
    * @param studentDetails : createStudentParams  - the student data to create
    * @returns Promise<Student>
    */
    postStudent(studentDetails : createStudentParams ): Promise<Student> {
        const newStudent = this.studentRepository.create({...studentDetails });
        const studentExists = this.studentRepository.findOne({where: {username: studentDetails.username}});
        if(studentExists) {
            throw new BadRequestException('Student already exists');
        }
        if(!studentDetails.username || !studentDetails.password){
            throw new BadRequestException('Missing required fields');
        }
        return this.studentRepository.save(newStudent);
        //save() is async method
    }
    
    /**
    * Get a student by id
    * @param id: number - the id of the student to retrieve
    * @returns Promise<Student>
    */
    getStudentById(id: number): Promise<Student> {
        const student = this.studentRepository.findOne({where: {id}});
        return student;
    }
    
    /**
    * Update an existing student by id
    * @param id: number - the id of the student to update
    * @param studentDetails: updateStudentParams - the new data for the student
    * @returns void
    */
    updateStudentById(id: number ,studentDetails: updateStudentParams) {
      this.studentRepository.update({ id }, {...studentDetails});
      //if user changes just one field, just that field gets updated 
    }

    /**
    * Delete a student by id, this function should be used with caution 
    * as it will delete all the records associated with the student.
    * @param id: number - the student id to delete
    * @returns void
    */ 
    deleteStudentById(id:number) {
        this.studentRepository.delete({ id });
    }

 }

 //curl command 
 // post
 //Invoke-WebRequest -Method POST -Uri http://localhost:3000/student -Headers @{'Content-Type'='application/json'} -Body '{ "username": "liviu", "password": "cicua", "age": "27" }'

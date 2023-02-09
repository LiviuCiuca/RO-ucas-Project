import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
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
        if(!student){
            throw new BadRequestException('Student not found');
        }
        return student;
    }
    
    /**
    * Update an existing student by id
    * @param id: number - the id of the student to update
    * @param studentDetails: updateStudentParams - the new data for the student
    */
    updateStudentById(id: number ,studentDetails: updateStudentParams){
        this.getStudentById(id);
        return this.studentRepository.update({ id }, {...studentDetails});
      //if user changes just one field, just that field gets updated 
    }

    /**
    * Delete a student by id, this function should be used with caution 
    * as it will delete all the records associated with the student.
    * @param id: number - the student id to delete
    * @returns void
    */ 
    deleteStudentById(id:number) {
        this.getStudentById(id);
        const success = this.studentRepository.delete({ id });
        if(!success){
            throw new BadRequestException('deleted not successful');
                }
        return success;
    }
 }

 //curl command 
 // post
 //Invoke-WebRequest -Method POST -Uri http://localhost:3000/student -Headers @{'Content-Type'='application/json'} -Body '{ "username": "liviu", "password": "cicua", "age": "27" }'

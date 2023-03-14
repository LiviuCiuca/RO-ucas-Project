import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    async postStudent(studentDetails: createStudentParams): Promise<Student> {

    
        const newStudent = this.studentRepository.create({...studentDetails });
        return this.studentRepository.save(newStudent);
    }
    
    /**
    * Get a student by id
    * @param id: number - the id of the student to retrieve
    * @returns Promise<Student>
    */
    async getStudentById(id: number): Promise<Student> {
        const student = await this.studentRepository.findOne({where: {id}});
        if(student){
            return student;
        }
        throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    
    
    /**
    * This way, if the student is not found, the error will be propagated up the call stack and the catch block will catch it, 
    * throwing the "Student not found" error. 
    * @param id: number - the id of the student to update
    * @param studentDetails: updateStudentParams - the new data for the student
    */
    async updateStudentById(id: number ,studentDetails: updateStudentParams) {
        try {
          await this.getStudentById(id);
          return await this.studentRepository.update({ id }, {...studentDetails});
        } catch (error) {
          if (error instanceof HttpException) {
            throw error;
          }
          throw new HttpException('Could not update student', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      
    /**
    * Delete a student by id, this function should be used with caution 
    * as it will delete all the records associated with the student.
    * @param id: number - the student id to delete
    * @returns void
    */ 
    async deleteStudentById(id: number): Promise<void> {
        try {
          const student = await this.getStudentById(id);
          await this.studentRepository.delete({ id });
        } catch (error) {
          if (error instanceof HttpException) {
          throw error;
          }
          throw new BadRequestException('Delete not successful');
        }
    }
 }

 //curl command 
 // post
 //Invoke-WebRequest -Method POST -Uri http://localhost:3000/student -Headers @{'Content-Type'='application/json'} -Body '{ "username": "liviu", "password": "cicua", "age": "27" }'

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  duration: number;

  
  university: any;
  enrollments: any;
}

//applying the @IsNotEmpty() decorator to the entire class,
// it will only validate that the class instance is not empty,
// it won't validate the individual properties of the class.
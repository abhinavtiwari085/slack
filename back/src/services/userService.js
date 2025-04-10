import  ValidationError  from '../utils/errors/validationError.js' ;
import userRepository from "../repositories/userRespository.js";
import ClientError from '../utils/errors/clientError.js';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt'
import { createJWT } from '../utils/common/authUtils.js';


console.log("inside user service");
export const signUpService=async (data)=>{
    try {
        const newUser=await userRepository.create(data);
        console.log("inside user service",newUser); 
        return newUser;

    } catch (error) {
        console.log("user service error",error); 
        console.log("error name in service",error.name,error.code);
        if (error.name === 'ValidationError') {
            console.log("throwing validation error from service")
            throw new ValidationError(
              {
                error: error.errors
              },
              error.message
            );
          }
          if (error.name === 'MongoServerError'  && error.code === 11000) {
            console.log("throwing mongoservererror error from service")
            throw new ValidationError(
              {
                error: ['A user with same email or username already exists']
              },
              'A user with same email or username already exists'
            );
          }
          if (error.name === 'MongooseError') {
            console.log("throwing mongoservererror error from service")
            throw new ValidationError(
              {
                error: ['A user with same email or username already exists']
              },
              'A user with same email or username already exists'
            );
          }
    }
} 

export const signInService=async (data)=>{
    try {
        const user=await userRepository.getByEmail(data.email);
        console.log("sign in user",user);
        if(!user){
            throw new ClientError({
                explanation:'invalid data send from user',
                message:"no registered user with this email",
                statusCode:StatusCodes.NOT_FOUND
            })
        }

        //match the password with hash password
        const isMatch=bcrypt.compareSync(data.password,user.password);
        if(!isMatch){
            throw new ClientError({
                explanation:'invalid data send from user',
                message:"wrong pass for the given email",
                statusCode:StatusCodes.NOT_FOUND
            })
        }
        return {
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            _id: user._id,
            token: createJWT({ id: user._id, email: user.email })
          };


    } catch (error) {
        console.log('User service sign in error', error);
        throw error;

    }
}
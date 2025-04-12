import { StatusCodes } from "http-status-codes";
import { customErrorResponse, internalErrorResponse ,successResponse} from "../utils/common/responseObject.js";
import { signUpService,signInService} from "../services/userService.js";


console.log("inside controller");
export const signUp = async (req, res) => {
    try {
      const user = await signUpService(req.body);
      console.log("user from controller",user);
  
      return res
        .status(StatusCodes.CREATED)
        .json(successResponse(user, 'User created successfully'));
    } catch (error) {
      console.log('User controller error', error);
      if (error.statusCode) {
        console.log(error.statusCode);
        console.log(customErrorResponse(error));
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
     // console.log(error.statusCode); 
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };

  export const signIn = async (req, res) => {
    try {
      const response = await signInService(req.body);
      console.log(response);
      return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'User signed in successfully'));
    } catch (error) {
      console.log('User controller error', error);
      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
  
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };

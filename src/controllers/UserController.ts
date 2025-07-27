import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { GetUserByIdUseCase } from '../usecases/GetUserByIdUseCase';

const userRepository = new UserRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

export class UserController {
  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userDto = await getUserByIdUseCase.execute(id);

      return res.json(userDto);
    } catch (error: any) {
      const status = error.statusCode || 500;
      const message = error.message || 'Internal server error';

      return res.status(status).json({ message });
    }
  }
}
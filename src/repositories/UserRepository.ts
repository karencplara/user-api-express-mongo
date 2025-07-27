import { User, IUser } from '../models/User';
import mongoose from 'mongoose';
import { BadRequestError, NotFoundError } from '../errors';

export class UserRepository {
  async findById(id: string): Promise<IUser> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestError('Invalid user ID');
    }

    const user = await User.findOne({ _id: id, age: { $gt: 21 } }).exec();

    if (!user) {
      throw new NotFoundError('User not found or under age');
    }

    return user;
  }
}
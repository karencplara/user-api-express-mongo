import { UserDto } from '../dtos/UserDto';
import { UserRepository } from '../repositories/UserRepository';

export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<UserDto> {
    const user = await this.userRepository.findById(id);

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      age: user.age,
    };
  }
}
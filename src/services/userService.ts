import User from "../models/User";

export class UserService {
  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    birthYear: number;
    phoneNumber: string;
    city: string;
  }) {
    const user = await User.create(userData);
    return user;
  }

  async updateUser(
    id: number,
    userData: Partial<{
      firstName: string;
      lastName: string;
      email: string;
      age: number;
      birthYear: number;
      phoneNumber: string;
      city: string;
    }>
  ) {
    await User.update(userData, { where: { id } });
    const updatedUser = await User.findByPk(id);
    return updatedUser;
  }

  async deleteUser(id: number) {
    const result = await User.destroy({ where: { id } });
    return result > 0;
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

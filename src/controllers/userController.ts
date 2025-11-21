import { Request, Response } from "express";
import { UserService } from "../services/userService";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.updateUser(
        Number(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.deleteUser(Number(req.params.id));
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }
}

export default UserController;

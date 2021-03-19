import { User, UserInterface } from "../Models/User.model";
import { Request, Response } from "express";

export class UserController {
  public create(req: Request, res: Response) {
    const params: UserInterface = req.body;
    User.create<User>(params)
      .then((User: User) => res.status(201).json(User))
      .catch((err: Error) => res.status(500).json(err));
  }

  public get(req: Request, res: Response) {
    const params: UserInterface = req.body;
    User.findOne<User>({where:{id:req.params.id}})
      .then((User: User) => res.status(201).json(User))
      .catch((err: Error) => res.status(500).json(err));
  }

  public getAll(req: Request, res: Response) {
    User.findAll<User>()
      .then((Users: User[]) => res.status(201).json(Users))
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const params: UserInterface = req.body;
    console.log(params);
    User.update<User>({...params}, {where:{id:req.params.id}})
      .then(() => res.status(201).json(User))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const params: UserInterface = req.body;
    User.destroy<User>(
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(() => res.status(201).json(req.body.id))
      .catch((err: Error) => res.status(500).json(err));
  }
}
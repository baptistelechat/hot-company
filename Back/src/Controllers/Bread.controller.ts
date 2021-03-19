import { Bread, BreadInterface } from "../Models/Bread.model";
import { Request, Response } from "express";

export class BreadController {
  public create(req: Request, res: Response) {
    const params: BreadInterface = req.body;
    Bread.create<Bread>(params)
      .then((Bread: Bread) => res.status(201).json(Bread))
      .catch((err: Error) => res.status(500).json(err));
  }

  public get(req: Request, res: Response) {
    const params: BreadInterface = req.body;
    Bread.findOne<Bread>({where:{id:req.params.id}})
      .then((Bread: Bread) => res.status(201).json(Bread))
      .catch((err: Error) => res.status(500).json(err));
  }

  public getAll(req: Request, res: Response) {
    const params: BreadInterface = req.body;
    Bread.findAll<Bread>()
      .then((Breads: Bread[]) => res.status(201).json(Breads))
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const params: BreadInterface = req.body;
    Bread.update<Bread>({...params}, {where:{id:req.params.id}})
      .then(() => res.status(201).json(Bread))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const params: BreadInterface = req.body;
    Bread.destroy<Bread>(
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
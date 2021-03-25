import { Request, Response } from "express";
import axios from 'axios';
interface ToastInterface {
    time:number;
}

export class Toast {
    /**
     * Toast
     * This service only call GPIO
     */
    public Toast(req: Request, res: Response) {
        const params: ToastInterface = req.body;
        axios.get('http://gpio:5100/toast', {
                params,
            })
            .then(() => res.status(201).json({message: 'Toasted'}))
            .catch((err: Error) => res.status(500).json(err));
    }
}
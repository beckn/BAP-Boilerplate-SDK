import {Request, Response, NextFunction} from 'express';
import { merge, get } from 'lodash';
import { getUserBySessionToken } from '../models/Users'; 

//MIDDLEWARES

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sessionToken = req.cookies['AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import config from '../helpers/config';
import User from '../model/user';
import ResponseService from '../helpers/response';

export async function findUser(Id: string) {
  return User.findOne({ _id: Id });
}

export default class UserController {
  public async getAll(req: Request, res: Response) {
    try {
      const users = await User.find({ archive: { $ne: true } });
      ResponseService.successResponse(res, users);
    } catch (err) {
      ResponseService.mongoErrorResponse(res, err);
    }
  }

  public async get(req: Request, res: Response) {
    try {
      // @ts-ignore
      const id = req.params.userId || req.user._id;
      const user = await findUser(id);
      ResponseService.successResponse(res, user);
    } catch (err) {
      ResponseService.mongoNotFoundResponse(res, err);
    }
  }

  public async getAllSupervisor(req: Request, res: Response) {
    try {
      const user = await User.find({
        isSupervisor: req.query.isSupervisor, archive: { $ne: true }
      });
      ResponseService.successResponse(res, user);
    } catch (err) {
      ResponseService.mongoErrorResponse(res, err);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      // @ts-ignore
      const id = req.params.userId || req.user._id;
      const { body } = req;

      User.findOne({ _id: id }, async (err: Error, user: typeof User) => {
        if (user) {
          if (body.newPassword) {
            // @ts-ignore
            if (await user.checkPassword(body.password)) {
              // delete body.password;
              body.password = await bcrypt.hash(body.newPassword, config.SALT);
              await User.updateOne({ _id: id }, { $set: { ...body } });
              ResponseService.successResponse(res, 'User updated');
            } else {
              ResponseService.mongoNotFoundResponse(res, 'Password is incorrect');
            }
          } else {
            await User.updateOne({ _id: id }, { $set: { ...body } });
            ResponseService.successResponse(res, 'User updated');
          }
        } else {
          ResponseService.mongoNotFoundResponse(res, 'Username or password is incorrect');
        }
      });
    } catch (err) {
      ResponseService.mongoNotFoundResponse(res, err);
    }
  }

  //Delete a user
  public async delete(req: Request, res: Response) {
    try {
      const id = req.params.userId;
      const response = await User.updateOne({ _id: id }, { archive: true });
      res.json(response);
    }
    catch (err) {
      ResponseService.mongoNotFoundResponse(res, err);
    }
  }
}

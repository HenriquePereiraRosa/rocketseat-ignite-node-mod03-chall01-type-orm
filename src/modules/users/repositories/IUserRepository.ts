import { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO } from '../model/dtos/userDTO';
import { User } from '../model/entities/User';

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}

import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UserModel } from '../domain/user.model';

export abstract class UserRepository {
  abstract getByPage(page: number): Observable<Page<UserModel>>;
  abstract insert(driver: Partial<UserModel>): Observable<UserModel>;
}

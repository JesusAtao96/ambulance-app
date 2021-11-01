import { Injectable } from '@angular/core';
import { UserRepository } from './user.repository';
import { UserModel } from '../domain/user.model';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';

@Injectable({
  providedIn: 'root',
})
export class UserUseCase implements UseCase<UserModel> {
  constructor(private user: UserRepository) {}

  getByPage(page: number): Observable<Page<UserModel>> {
    return this.user.getByPage(page);
  }
}

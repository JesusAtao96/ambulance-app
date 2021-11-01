import { Injectable } from '@angular/core';
import { DriverRepository } from './driver.repository';
import { DriverModel } from '../domain/driver.model';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverUseCase implements UseCase<DriverModel> {
  constructor(private driver: DriverRepository) {}

  getByPage(page: number): Observable<Page<DriverModel>> {
    return this.driver.getByPage(page);
  }
}

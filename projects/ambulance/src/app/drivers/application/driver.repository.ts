import { Observable } from 'rxjs';
import { DriverModel } from '../domain/driver.model';
import { Page } from '../../shared/interfaces/page.interface';

export abstract class DriverRepository {
  abstract getByPage(page: number): Observable<Page<DriverModel>>;
  abstract insert(driver: Partial<DriverModel>): Observable<DriverModel>;
}

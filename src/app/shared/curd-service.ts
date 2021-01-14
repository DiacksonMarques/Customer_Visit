import { HttpClient } from "@angular/common/http";
import { delay, take } from "rxjs/operators";

export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL: any) { }

  getAll() {
    return this.http.get<T[]>(this.API_URL).pipe(delay(2000));
  }

  getById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private setCreate(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private setUpdate(record: any){
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  setSave(record: any) {
    if (record['id']) {
      return this.setUpdate(record);
    }

    return this.setCreate(record);
  }

  setDelete(record :any) {
    return this.http.delete(`${this.API_URL}/${record['id']}`).pipe(take(1));
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  get HttpParams(){
    return  new HttpParams().set( 'fields',  'name,capital,flag,population,alpha2Code');
  }

  buscarPais(termino:string): Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get(url, {params: this.HttpParams});
  }
  // buscarPais(termino:string): Observable<Pais[]>{
  //   const url = `${this.apiUrl}/name/${termino}`;
  //   return this.http.get<Pais[]>(url);
  // }


  buscarCapital(termino:string):Observable<any>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get(url);
  }


  getPaisPorAlpha(id:string):Observable<any>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<any>(url);
  }


  getRegion(region:string): Observable<any>{

    const params = new HttpParams()
      .set( 'fields',  'name,capital,flag,population,alpha2Code');

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<any>(url, {params})
      .pipe(
        tap(console.log)
      )
  }
}

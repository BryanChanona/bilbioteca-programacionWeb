import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class BookService {
    private apiUrl = 'http://localhost:3000/books'; // Cambia 'book' a 'books'


  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/getAllBooks`);
  }


  deleteBook(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/deleteBook/${id}`)
  }
  updatebook(id:number,book: Book): Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/updateBook/${id}`,book)
  }



  

  
 
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule,HttpClientModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent implements OnInit {
  books: Book[] = []; // Inicializa el array de libros

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks(); // Llama al método para cargar libros al iniciar
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error al cargar libros', error); // Manejo de errores
      }
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(book => book.id !== id);
      },
      error: (error) => {
        console.error('Error al eliminar el libro', error); // Manejo de errores
      }
    })

  }


  updateBook(id:number,book: Book): void{
    this.bookService.updatebook(id,book).subscribe({
      next: ()=> {
        console.log('Libro actualizado exitosamente');
        this.loadBooks();
          
      },
      error: (error) => {
        console.error('Error al actualizar el libro', error); // Manejo de errores
      }

    })

  }






}

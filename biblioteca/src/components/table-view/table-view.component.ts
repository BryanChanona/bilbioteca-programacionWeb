import { Component,OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent implements OnInit{
  books: Book[] = []; // Inicializa el array de libros

  constructor(private bookService: BookService) {}

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

 

  

}

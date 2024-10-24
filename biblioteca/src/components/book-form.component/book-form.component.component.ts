import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.component.html',
  styleUrls: ['./book-form.component.component.scss'],
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      releaseDate: ['', Validators.required]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      console.log('Libro creado:', newBook);
      // Aquí puedes agregar la lógica para enviar el libro a tu backend
    } else {
      console.log('Formulario no válido');
    }
  }
}

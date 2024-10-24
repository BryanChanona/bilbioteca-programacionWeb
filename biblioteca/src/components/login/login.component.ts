import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormLoginComponent } from "../form-login/form-login.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormLoginComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

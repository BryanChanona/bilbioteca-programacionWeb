import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { TableViewComponent } from '../table-view/table-view.component';



@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,TableViewComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent {

}

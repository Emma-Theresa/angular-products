import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Timestamp } from 'rxjs';
import { HighlightDirective } from '../../highlight.directive';
import { CardListComponent } from "../../Ui/card-list/card-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, HighlightDirective, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
time:number=Date.now()
isActive=false
}

import { Component, OnInit, SimpleChange, ɵɵNgOnChangesFeature } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from "./room/room.component";
import { BedroomComponent } from "./bedroom/bedroom.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { ButtonComponent } from "./button/button.component";
import { CardsComponent } from "./Ui/cards/cards.component";

import { CardListComponent } from "./Ui/card-list/card-list.component";
import { NavbarComponent } from "./Ui/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomComponent, BedroomComponent, KitchenComponent, ButtonComponent, CardsComponent, CardListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'prodcut-app'

  login(){
    alert("Logged in")
  }
  submit(){
    alert("Submitted")
  }
  handleEvent(){
    alert("hello")
  }
}


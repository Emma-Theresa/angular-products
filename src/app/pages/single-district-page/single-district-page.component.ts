import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from "../../Ui/cards/cards.component";
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Import HttpClient


@Component({
  selector: 'app-single-district-page',
  standalone: true,
  imports: [CardsComponent, NgIf],
  templateUrl: './single-district-page.component.html',
  styleUrl: './single-district-page.component.css'
})
export class SingleDistrictPageComponent {
  id!: number;
  productName: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        console.log("Detail Component ID:", this.id);
        this.fetchDetails(this.id);
      } else {
        console.error("ID param is missing!");
      }
    });
    this.getData();
  }

  fetchDetails(id: number): void {
    console.log('Fetching details for ID:', id);
  }

  getData(): void {
    this.http.get<{ products: any[] }>('https://dummyjson.com/products')
      .subscribe(
        data => {
          this.productName = data.products;
          console.log('Fetched data:', this.productName);
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }

  logId(id: number): void {
    console.log('Product ID:', id);
  }
}

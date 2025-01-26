import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


interface Product {
  id: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-posts',
  imports: [
    CommonModule,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent {

  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<any>('https://dummyjson.com/products')
      .subscribe((result) => {
        this.products = result.products;
      });
  }

  ngOnInit() {
    this.getProducts();
  }
}

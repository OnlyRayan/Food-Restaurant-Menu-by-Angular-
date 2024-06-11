import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Menu';
  total: number = 0;
  qty: number = 0;
  prodname: string = '';

  foodmenu = [
    {
      id: 1,
      name: 'Grilled Chicken',
      price: 30,
      description: 'Charcoal-grilled chicken',
      img: '/assets/png1.webp'
    },
    {
      id: 2,
      name: 'Barbecue Chicken',
      price: 30,
      description: 'Flame-grilled chicken',
      img: '/assets/2.jpg'
    },
    {
      id: 3,
      name: 'Mixed Vegetable Stew',
      price: 20,
      description: 'Assorted vegetables in a savory stew',
      img: '/assets/3.jpg'
    },
    {
      id: 4,
      name: 'Baked Chicken Casserole',
      price: 20,
      description: 'Chicken baked with vegetables',
      img: '/assets/4.jpg'
    }
  ];

  sum(event: Event, price: number) {
    const target = event.target as HTMLInputElement;
    const isChecked: boolean = target.checked;
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }
  }

  find(foodmenu: any[]) {
    return foodmenu.filter(item =>
      item.name.toLowerCase().includes(this.prodname.toLowerCase())
    );
  }
}
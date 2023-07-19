import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    productData: any =[];


    constructor(private userService: UserService) {
      this.userService.getProductData().subscribe((data) => {
        this.productData = data;
        console.log(this.productData);
      });
    }

    searchText: string= '';

  onSearchTextEntered(searchValue: string){
            this.searchText= searchValue;

  }
}

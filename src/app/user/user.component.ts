import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userData: any = [];
  originalUserData: any =[];
  p:number=1;
  ascendingOrder: boolean = true;

  sortData() {
    console.log('click');
    this.userData.users.sort((a, b) => {
      console.log(b.id - a.id)
      return this.ascendingOrder ? a.id - b.id : b.id - a.id;
    });

    // Toggle the sorting order for the next click
    this.ascendingOrder = !this.ascendingOrder;

  }

  sortName() {
    console.log('click name');
    this.userData.users.sort((a, b) => {
      console.log(b.firstName - a.firstName)
      return this.ascendingOrder ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName);
    });
    this.ascendingOrder = !this.ascendingOrder;
  }

  sortUserName() {

    this.userData.users.sort((a, b) => {
      return this.ascendingOrder ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username);
    });
    this.ascendingOrder = !this.ascendingOrder;
  }

  sortAge() {

    this.userData.users.sort((a, b) => {
      return this.ascendingOrder ? a.age - b.age : b.age - a.age;
    });
    this.ascendingOrder = !this.ascendingOrder;
  }

  constructor(private userService: UserService) {
    this.userService.getUserData().subscribe((data) => {
      this.userData = data;
      this.originalUserData = JSON.parse(JSON.stringify(data));
      // console.log(this.userData);
    });
  }

  searchText: string= '';

  onSearchTextEntered(searchValue: string){
            this.searchText= searchValue;

  }

  resetData(): void {
    this.userData = JSON.parse(JSON.stringify(this.originalUserData));
  }

}

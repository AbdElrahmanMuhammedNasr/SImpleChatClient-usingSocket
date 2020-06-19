import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  firends :any;

  constructor(private http: HttpClient, private router: Router) { }

  

  ngOnInit(): void {
    this.onGetAllFriends();
    interval(10000).subscribe(x => {
      this.onGetAllFriends();
      });
  }


  onGetAllFriends(){
    this.http.get('http://localhost:8080/UserApi/getUsers')
    .subscribe(
      data => {
        this.firends = data;
      },err =>{
      }
     
    )
  }

}

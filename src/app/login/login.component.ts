import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  @ViewChild('login') userName: NgForm ;
  newUser: any;


  ngOnInit(): void {
  }
 
  onLogin(){
    this.newUser = {
      userName: this.userName.value.userName
    }

    this.http.post('http://localhost:8080/UserApi/addUser', this.newUser)
    .subscribe(
      data => {
        localStorage.setItem('user', this.userName.value.userName);
        this.router.navigate(['/chat'])
      },
      err =>{
        this.router.navigate(['/login'])
      }
    )

    console.log(localStorage.getItem('user'));

  }
}

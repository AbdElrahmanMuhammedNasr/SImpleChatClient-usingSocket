import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  firends = [];

  constructor() { }

  ngOnInit(): void {
    this.firends = [
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Badawy',
        message:'OK',
        time: '1:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Mo',
        message:'night',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },{
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Badawy',
        message:'OK',
        time: '1:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Mo',
        message:'night',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
      {
        img: 'https://ptetutorials.com/images/user-profile.png',
        name:'Hassan',
        message:'good bye',
        time: '2:30 PM',
      },
    ]

  }

}

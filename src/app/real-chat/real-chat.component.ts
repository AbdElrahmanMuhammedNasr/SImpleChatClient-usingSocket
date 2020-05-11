import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-chat',
  templateUrl: './real-chat.component.html',
  styleUrls: ['./real-chat.component.css']
})
export class RealChatComponent implements OnInit {

  constructor() { }

  messages = [];

  ngOnInit(): void {
    this.messages = [
      {
        firend:true,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:true,
        message:'Pellentesque  turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:30AM | Dec 25'
      },
  
      {
        firend:false,
        message:' tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:true,
        message:' et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:33AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique  feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:34AM | Dec 25'
      },
  
      {
        firend:false,
        message:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet',
        time:'11:35AM | Dec 25'
      },
    ]
  }


}

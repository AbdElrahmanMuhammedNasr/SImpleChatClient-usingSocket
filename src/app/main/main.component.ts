import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   stompClient: any;
   socket: any;

  @ViewChild('sendMessage') messsages: NgForm ;

  constructor() { }
  messag = [];
  user = localStorage.getItem('user');

  ngOnInit(): void {
    this.connected();
  }


  onsendMessage() {
    this.stompClient.send('/app/chat', {}, JSON.stringify({content: this.messsages.value.message, sender: localStorage.getItem('user')}));
    this.messsages.reset();
  }

  connected() {
    this.socket = new SockJS('http://localhost:8080/chat');
    this.stompClient = Stomp.over(this.socket);

    const _this = this;

    _this.stompClient.connect({}, function(frame) {
      console.log('................Connected: ' + frame);

      _this.stompClient.subscribe('/topic/mes', function(res) {
        let data = JSON.parse(res.body);
        _this.messag.push(data);
      });

    });

}


}

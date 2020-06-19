import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   stompClient: any;
   socket: any;

  @ViewChild('sendMessage') messsages: NgForm ;

  constructor(private http:HttpClient) { }
  messag : any = [];
  user = localStorage.getItem('user');

  ngOnInit(): void {
    this.connected();
    this.onGetMessages();
  }

  onGetMessages(){
    this.http.get('http://localhost:8080/getAll').subscribe(
      data =>{
        this.messag = data;
        console.log(data);
      }
    )
  }

  onsendMessage() {
    if(this.messsages.value.message == null){

    }else{
    this.stompClient.send('/app/chat', {}, JSON.stringify({content: this.messsages.value.message, sender: localStorage.getItem('user')}));
    this.messsages.reset();
    }
  }

  connected() {
    this.socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(this.socket);

    const _this = this;

    _this.stompClient.connect({}, function(frame) {
      console.log('................Connected: ' + frame);

      _this.stompClient.subscribe('/topic/mes', function(res) {
        let data = JSON.parse(res.body);
        // console.log('data is',data);
        _this.messag.push(data);
      });

    });

}


}

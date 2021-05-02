import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contents = "";
  messages = [];

  constructor() { }

  sendMessage(){
    let messagess = {
      contents:this.contents
    }
    this.messages.push(messagess);
    this.clearField();
  }
  clearField(){
    this.contents = "";

  }

  ngOnInit() {
  }
  

<<<<<<< HEAD
}

=======
}
>>>>>>> a7aa33c (Act4Message)

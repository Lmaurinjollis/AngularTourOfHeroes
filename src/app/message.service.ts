import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //This property will contain each action made on the app
  messages: string[] = [];

  //Push every a message of every action calling this service
  add(message: string) {
    this.messages.push(message);
  }

  //clear all message
  clear() {
    this.messages = [];
  }
}

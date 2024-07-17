import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: any[] = [];
  newMessage: string = '';

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    // Load initial messages from Firestore
    this.loadMessages();
  }

  loadMessages() {
    // Example: Load messages from Firestore
    this.firestore.collection('conversations/conversationId/messages')
      .valueChanges().subscribe((messages: any[]) => {
        this.messages = messages;
      });
  }

  getMessageClass(sender: string) {
    // Implement your logic here for message styling
    return sender === 'user' ? 'message-sent' : 'message-received';
  }

  sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    const messageData = {
      sender: 'user',
      content: this.newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Example: Add message to Firestore
    this.firestore.collection('conversations/conversationId/messages').add(messageData)
      .then(() => {
        console.log('Message sent successfully');
        this.newMessage = ''; // Clear input field
      })
      .catch((error: firebase.FirebaseError) => {
        console.error('Error sending message:', error);
      });
  }

}

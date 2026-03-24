import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-chat-page',
  imports: [MatIconModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.scss',
})
export class ChatPage {
  constructor(private dialogRef: MatDialogRef<ChatPage>) { }
  sizetoggle = true;

  toggleSize() {
    if (this.sizetoggle) {
      //Make big
      this.dialogRef.updateSize('95vw', '95vh');
      this.sizetoggle = false;
    } else {
      this.dialogRef.updateSize('40vw', '95vh');
      this.sizetoggle = true;
    }

    console.log(this.sizetoggle)

  }


  message = '';
  messages: any[] = [
    { text: 'Hello! How can I help you today?', from: 'bot' }
  ];

  sendMessage() {
    if (!this.message.trim()) return;

    this.messages.push({ text: this.message, from: 'user' });
    this.message = '';
  }


}

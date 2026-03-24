import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { ChatPage } from '../../pages/chat-page/chat-page';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-top-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
   readonly dialog = inject(MatDialog);

  openDialog(){
    const dialogRef = this.dialog.open(ChatPage, {
      data: {},
      height: '95vh',
      width: '40vw',
      maxHeight: '95vh',
      maxWidth: '95vw',
      position: {
        right: '15px'
      }
    });
  }

}

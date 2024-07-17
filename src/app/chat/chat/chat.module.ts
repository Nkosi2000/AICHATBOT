// src/app/chat/chat.module.ts or the module where ChatComponent is declared
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChatComponent } from 'src/app/chat/chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ChatComponent]
})
export class ChatModule {}

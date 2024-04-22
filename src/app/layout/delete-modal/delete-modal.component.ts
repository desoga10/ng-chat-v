import { Component, effect, inject, signal } from '@angular/core';
import { ChatService } from '../../supabase/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css',
})
export class DeleteModalComponent {
  private chat_service = inject(ChatService);
  private router = inject(Router);
  dismiss = signal(false);

  constructor() {
    effect(() => {
      console.log(this.chat_service.savedChat());
    });
  }

  deleteChat() {
    const id = (this.chat_service.savedChat() as { id: string }).id;

    console.log(id);

    this.chat_service
      .deleteChat(id)
      .then(() => {
        let currentUrl = this.router.url;

        this.dismiss.set(true);

        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([currentUrl]);
          });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
}

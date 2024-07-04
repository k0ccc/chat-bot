import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Anwser, AnwserService } from '../../services/anwser.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBotComponent {
  anwserService = inject(AnwserService);
  @Input() maxHeight: number = 80;
  messages: Anwser[] = [];

  inputForm = new FormGroup({
    input: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яА-Я?]+$'),
    ]),
  });

  handleSubmit() {
    if (typeof this.inputForm.value.input === 'string'){
      this.messages.push(
        this.anwserService.ReturnResponse(this.inputForm.value.input)
      );
    }
    this.inputForm.reset() 
    const element = document.querySelector('#end');
    setTimeout(function () {
    if (element) element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
    },100);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Anwser {
  id: number;
  command: string;
  response: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnwserService {
  constructor() {}
  ReturnResponse(
    command: string
  ): Anwser {
    // Серверные ответы. по этому any.
    let data: any = {
      commands: [
        {
          id: 1,
          command: 'Привет',
          response: 'Здравствуйте! Чем могу помочь?',
        },
        {
          id: 2,
          command: 'Как тебя зовут?',
          response: 'Я ваш виртуальный ассистент.',
        },
        {
          id: 3,
          command: 'Помощь',
          response: 'Вы можете задать мне любой вопрос.',
        },
      ],
      unknownCommandResponse: 'Извините, я не понимаю эту команду.',
    };
    // Все еще серверный ответ для примера возьмем питон без строгой типизации :)
    const match = data.commands.find((item: any) => item.command === command);
    // Можно использовать of чтобы эмулировать http модуль который возвращает Observer<type>
    if (match) {
      return match;
    }
    let unknownData: Anwser = {
      id: 0,
      command: command,
      response: data.unknownCommandResponse,
    }; 
    return unknownData;
  }
}

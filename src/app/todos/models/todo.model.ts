export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
    this.completed = false;
  }
}

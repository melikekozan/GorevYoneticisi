import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Günlük Planlar', [
      "A işi",
      "B işi",

    ]),
    new Column('Haftalık Planlar', [
      "C işi",
      "D işi",
      "E işi"
    ]),
    new Column('Aylık Planlar', [
      "X işi",
      "Y işi",
      "Z işi"
    ]),
    new Column('Tamamlanmış Planlar', [
      "M işi",
      "N işi",
      "T işi"
    ]),
  ])

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

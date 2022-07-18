import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies : {episode: string, title: string }[] = [
    {episode: 'Episode I', title: 'The Phantom Menace'},
    {episode: 'Episode II', title: 'Attack of the Clones'},
    {episode: 'Episode III', title: 'Revenge of the Sith'},
    {episode: 'Episode IV', title: 'A New Hope'},
    {episode: 'Episode V', title: ' The Empire Strikes Back'},
    {episode: 'Episode VI ', title: 'Return of the Jedi'},
    {episode: 'Episode VII', title: ' The Force Awakens'},
    {episode: 'Episode VIII', title: 'The Last Jedi'},
    {episode: 'Episode IX ', title: 'The Rise of Skywalker'},
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}

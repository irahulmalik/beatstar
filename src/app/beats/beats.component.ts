import { Component, OnInit } from '@angular/core';
import { Models } from 'src/models/tracks.model';

@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrls: ['./beats.component.scss']
})
export class BeatsComponent implements OnInit {
  tracks: Array<Models>=[{name:"beat1",genre:["genre1","genre2"],price:12},{name:"beat2",genre:["genre1","genre2"],price:12},
  {name:"beat3",genre:["genre1","genre2"],price:12}];
  constructor() { }

  ngOnInit(): void {

  }

}

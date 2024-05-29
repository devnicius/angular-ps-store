import { STRING_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() gameCover:string = '';
  @Input() gameLabel:string = 'Exclusive';
  @Input() gameType:string = 'Digital';
  @Input() gamePlatform: string[] = ['PS4'];
  @Input() gamePrice:string = 'R$ 399,99';

  constructor() { }

  ngOnInit(): void {
  }

}

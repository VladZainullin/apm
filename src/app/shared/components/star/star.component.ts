import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  cropWidth: number = 75
  @Input() rating: number = 4

  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 75 / 5
  }

  onClick() {
    this.ratingClicked.emit(this.rating);
  }
}

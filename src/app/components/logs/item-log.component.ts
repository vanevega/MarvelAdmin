import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-log',
  templateUrl: '../../views/logs/item-log.component.html',
  styleUrls: ['../../views/logs/item-log.component.css']
})
export class ItemLogComponent {
  @Input()
  item: any;
}

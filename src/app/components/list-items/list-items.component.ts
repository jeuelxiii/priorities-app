import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../list.service';
import { Items } from '../../models/items';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

@Input() public list;

public isCompleted: boolean = false;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    
  }

  onToggle(list){
    console.log('toggled')
    this.isCompleted = !this.isCompleted;
    list.completed = !list.completed;
  }

  deleteItem(event, list){
    console.log('deleted')
    this.listService.deleteItem(list);
  }

}

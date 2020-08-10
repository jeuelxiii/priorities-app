import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/items';
import { ListService } from '../../list.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
lists: Items[];
newList = this.fb.group({
    title: [''],
    type: [''],
    completed: false
  });

  constructor(
    private listService: ListService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    let list$ = this.listService.list;
    list$.subscribe(data => {  
      this.lists = data;
    });
  }

  addItem(){
    if( this.newList.get('title').value != '' && this.newList.get('type').value != '' ){
        this.listService.addItem(this.newList.value)}
    console.log(this.newList.value);
    this.newList.get('title').setValue('');
  }

}

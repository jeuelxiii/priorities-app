import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/items';
import { ListService } from '../../list.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let list$ = this.listService.list;
    list$.subscribe(data => {
      this.lists = data;
    });
  }

  addItem() {

    if (this.newList.get('title').value != '' && this.newList.get('type').value != '') {
      this.listService.addItem(this.newList.value)
    }
    this.toastr.success('Your task has been added!', 'Good day!', {
      timeOut: 3000
    });
    this.newList.get('title').setValue('');


  }

}

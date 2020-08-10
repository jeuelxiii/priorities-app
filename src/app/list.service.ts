import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Items } from './models/items';

@Injectable({
  providedIn: 'root'
})
export class ListService {
list: Observable<Items[]>;
private itemsCollection: AngularFirestoreCollection<Items>;
itemDoc: AngularFirestoreDocument<Items[]>;

  constructor(private afs: AngularFirestore) {
      this.itemsCollection = afs.collection<Items>('list');
      this.list = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Items;
          data.id = a.payload.doc.id;
          return data;
        })));
   }

   addItem(item: any){      
      this.itemsCollection.add(item)
      .then(item => { console.log(item)})
      .catch(e => { console.log(e)})
     
    }

   deleteItem(item: Items){
    this.itemDoc = this.afs.doc(`list/${item.id}`);
    this.itemDoc.delete();
   }

}

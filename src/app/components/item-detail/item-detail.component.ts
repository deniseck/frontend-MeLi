import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  idItem: string = null;
  item: any;
  itemDescription: string = "";

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    this.idItem = this.route.snapshot.params.id;

    this.getItem();
  }

  getItem() {
    this.itemsService.getItemById(this.idItem).subscribe(
      response => {
        console.log(response);
        this.item = response.item;
    });
  }

}

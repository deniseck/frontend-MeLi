import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item';

import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  itemsToShow: Array<Item> = [];
  MAX_RESULTS = 4;

  constructor(private itemsService: ItemsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;
    
    this.itemsService.search(queryParams.search).subscribe(
      response => {
        console.log(response);
        this.itemsToShow = response.items;
      }
    );
  }

  goToDetail(item) {
    this.router.navigate(['items/' + item.id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchContent: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['items'], { queryParams: { search: this.searchContent } } );
  }

  
  goToHome() {
    this.router.navigate(['/']);
  }
}

import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

import { ItemsSearchComponent } from './items-search.component';

describe('ItemsSearchComponent', () => {
  let component: ItemsSearchComponent;
  let fixture: ComponentFixture<ItemsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        RouterModule.forRoot([]),
        HttpClientModule 
      ],
  declarations: [
    AppComponent, SearchBoxComponent,
    ItemsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.itemsToShow = []
    expect(component).toBeTruthy();
  });
});

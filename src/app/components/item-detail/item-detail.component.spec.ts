import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Item } from 'src/app/models/Item';
import { Price } from 'src/app/models/Price';
import { SearchBoxComponent } from '../search-box/search-box.component';

import { ItemDetailComponent } from './item-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        RouterModule.forRoot([ ]),
        HttpClientModule 
      ],
  declarations: [
    AppComponent, ItemDetailComponent, SearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.item = new Item();
    component.item.price = new Price();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

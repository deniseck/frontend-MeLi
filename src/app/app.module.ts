import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemsSearchComponent } from './components/items-search/items-search.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsSearchComponent,
    SearchBoxComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsSearchComponent},
      {path: 'items/:id', component: ItemDetailComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

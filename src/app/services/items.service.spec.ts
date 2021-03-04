import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Item } from '../models/Item';
import { ItemResult } from '../models/itemResult';
import { ItemsSearchResults } from '../models/ItemSearchResults';
import { ItemsService } from './items.service';
let httpClientSpy: { get: jasmine.Spy };
let itemsService: ItemsService;

describe('ItemService', () => {
beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  itemsService = new ItemsService(httpClientSpy as any);
});

it('should return expected search results', () => {
  const expectedResults: ItemsSearchResults = { items:[], author: { name: 'Denise', lastname: 'Ceriotti'}, categories: ['category 1', 'category 2'] };

  httpClientSpy.get.and.returnValue(of(expectedResults));

  itemsService.search('airpods').subscribe(
    result => expect(result).toEqual(expectedResults, 'expected search results'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should return expected item', () => {
  const expectedResults: ItemResult = { item: new Item(), author: { name: 'Denise', lastname: 'Ceriotti'}};

  httpClientSpy.get.and.returnValue(of(expectedResults));

  itemsService.getItemById('id1').subscribe(
    result => expect(result).toEqual(expectedResults, 'expected item'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
});

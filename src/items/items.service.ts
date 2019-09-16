import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interfaces';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '134147891874',
      name: 'Item One',
      qty: 100,
      desc: 'This is description of the first item'
    },
    {
      id: '654979313',
      name: 'Item Two',
      qty: 50,
      desc: 'This is description of the second item'
    }
  ];

  findAll(): Item[] {
    return this.items;
  }
}

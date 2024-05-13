// db.ts
import Dexie, { Table } from "dexie";

export interface ICartDB {
  id?: number;
  name: string;
  productId: string;
  quantity: string;
}

export class MySubClassedDexie extends Dexie {
  cartItems!: Table<ICartDB>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      cartItems: "++id, name, productId, quantity", // Primary key and indexed props
    });
  }
}

export const dexieDB = new MySubClassedDexie();

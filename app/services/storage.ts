'use strict';
import { Injectable }          from '@angular/core';
import { SqlStorage, Storage } from 'ionic-angular';

@Injectable()
export class StorageService {

  private storage: Storage;

  constructor() {
    this.storage = StorageService.initStorage();
  }

  public static initStorage(): Storage {
    return new Storage(SqlStorage);
  }

  public get(key: string): Promise<{}> {
    return this.storage.get(key);
  }

  public set(key: string, value: string): Promise<{}> {
    return this.storage.set(key, value);
  }

  public remove(key: string): Promise<{}> {
    return this.storage.remove(key);
  }
}

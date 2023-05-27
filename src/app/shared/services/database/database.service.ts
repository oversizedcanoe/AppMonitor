import { Injectable } from '@angular/core';

import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, capSQLiteSet, capSQLiteChanges, capSQLiteValues, capEchoResult, capSQLiteResult, capNCDatabasePathResult } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  sqlite: SQLiteConnection;
  isService: boolean = false;
  platform: string;
  sqlitePlugin: any;
  native: boolean = false;

  constructor() {
  }

  async initializePlugin(): Promise<boolean> {
    this.platform = Capacitor.getPlatform();
    if ( this.platform === 'ios' || this.platform === 'android' ) {
        this.native = true;
    }
    this.sqlitePlugin = CapacitorSQLite;
    this.sqlite = new SQLiteConnection(this.sqlitePlugin);
    this.isService = true;
    return true;
  }

}

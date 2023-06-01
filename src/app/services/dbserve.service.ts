import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { JsonSQLite } from '@capacitor-community/sqlite';


import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, capSQLiteSet,
         capSQLiteChanges, capSQLiteValues, capEchoResult, capSQLiteResult,
         capNCDatabasePathResult } from '@capacitor-community/sqlite';


@Injectable({
  providedIn: 'root'
})
export class DbserveService {
sqlite!: SQLiteConnection;
    isService: boolean = false;
    platform!: string;
    sqlitePlugin: any;
    native: boolean = false;
  db!: SQLiteDBConnection;
  
       
  constructor() {
   // this.initializePlugin();
    }
    /**
    * Plugin Initialization
    */
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

    /**
     * Echo a value
     * @param value
     */
    async echo(value: string): Promise<capEchoResult> {
        this.ensureConnectionIsOpen();
        return this.sqlite.echo(value);
    }
  
  
    async createConnection(database: string, encrypted: boolean,
                           mode: string, version: number
    ): Promise<void> {
       this.ensureConnectionIsOpen();
      this.db = await this.sqlite.createConnection(database, encrypted, mode, version, false);
      await this.db.open();
       
    }

    /**
     * Close a connection to a database
     * @param database
     */
    async closeConnection(database: string): Promise<void> {
        this.ensureConnectionIsOpen();
        return this.sqlite.closeConnection(database, false);
    }

    /**
     * Retrieve an existing connection to a database
     * @param database
     */
    async retrieveConnection(database: string): Promise<SQLiteDBConnection> {
        this.ensureConnectionIsOpen();
        return this.sqlite.retrieveConnection(database, false);
    }

   /**
     * Check if connection exists
     * @param database
     */
    async isConnection(database: string): Promise<capSQLiteResult> {
        this.ensureConnectionIsOpen();
        return this.sqlite.isConnection(database, false);
    }

    private ensureConnectionIsOpen() {
        if ( this.sqlite == null ) {
           this.initializePlugin();
        }
    }

 /**
     * Check if database exists
     * @param database
     */
    async isDatabase(database: string): Promise<capSQLiteResult> {
        this.ensureConnectionIsOpen();
        return this.sqlite.isDatabase(database);
    }
  
  async loadQuestion(number: Number) {
    if (this.db === null) {
      await this.createConnection('igcse001', false,'no-encryption', 1 );
    }
    
    return await this.db.query(`SELECT * FROM questions  ORDER BY RANDOM()  limit '${number}'`);
    
  }
  async getTestTaken() {
    if (await !this.db.isExists()) {
       
      await this.createConnection('igcse001', false,'no-encryption', 3 );
     }
     console.error('db data',this.db);
   return   await this.db.query(`SELECT * FROM test_taken ORDER BY id desc limit 1`);
  }
  async getTests() {
 if (await !this.db.isExists()) {
      await this.createConnection('igcse001', false,'no-encryption', 3 );
 }
    console.error('db data',this.db);
    return  await this.db.query(`SELECT * FROM test`);
  }
  async getYears() {
     if (await !this.db.isExists()) {
      await this.createConnection('igcse001', false,'no-encryption', 3 );
     }
     console.error('db data',this.db);
    return  await this.db.query(`SELECT * FROM q_year`);
  }
  async getSubjects() {
     if (await !this.db.isExists()) {
      await this.createConnection('igcse001', false,'no-encryption', 3 );
     }
     console.error('db data',this.db);
    return  await this.db.query(`SELECT * FROM subjects`);
  } 

}

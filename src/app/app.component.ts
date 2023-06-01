import { Component } from '@angular/core';

import { DatabaseService } from './services/database.service';
import { Platform } from '@ionic/angular';
import { SQLiteConnection } from '@capacitor-community/sqlite';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private initPlugin!: boolean;
  constructor( 
     private platform: Platform,
    private _sqlite: DatabaseService,
    ) {
    this.initializeApp();
    
    }

  initializeApp() {
    this.platform.ready().then(async () => {
     
      this._sqlite.initializePlugin().then(ret => {
        this.initPlugin = ret;
        
       
      });
    });
  }
}

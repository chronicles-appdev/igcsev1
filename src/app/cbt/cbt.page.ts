import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLiteDBConnection, capSQLiteResult } from '@capacitor-community/sqlite';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-cbt',
  templateUrl: './cbt.page.html',
  styleUrls: ['./cbt.page.scss'],
})
export class CbtPage implements OnInit {
 times: any;
  duration: any;
  anoth!: number;
  anoth1!: number;
  num_quest: any;
  marking: any;
 
  question_id: any;
  constructor(private route: ActivatedRoute, private router: Router, private _sqlite: DatabaseService) { }

  ngOnInit() {

    let testDetails: any = localStorage.getItem('testDetail'); 
    let test_takenDetail: any = localStorage.getItem('test_takenDetail');
   
    const conv = JSON.parse(testDetails);
    const tt_ids = JSON.parse(test_takenDetail);
    const tt_id = tt_ids.test_taken_id;
    const test_id = conv.type;

 
    this.getTimer(tt_id, test_id);
       
 
    
  }

  formatTime(minutes: number): string {
    let seconds = minutes * 60;

    const interval = setInterval(() => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      this.times = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

      seconds--;

      if (seconds < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return `${minutes} minutes`;
  }
  
  async getTimer(tt_id: any, test_id: any) {
   
    const check: any = (await this._sqlite.isConnection('igcse001')).result;
    console.log(check);
    if (check) {
        try {
      
             let first: SQLiteDBConnection = await this._sqlite.retrieveConnection('igcse001');
          await first.open();
           await first.open();
            let getTestTaken: any = await first.query(`SELECT * FROM marking WHERE  test_taken_id='${tt_id}'`);
              this.marking = getTestTaken.values;
            
            let getTest: any = await first.query(`SELECT * FROM test WHERE  id='${test_id}' ORDER BY id DESC LIMIT 1`);
              this.duration = getTest.values;
              this.anoth = this.duration[0].duration;
              this.formatTime(this.anoth);

     
    
  
        } catch (error) {
          console.error(error);
        } finally {
          this._sqlite.closeConnection('igcse001');
        }

    } else {
     // this._sqlite.closeConnection('igcse001');
         try {
      this._sqlite.closeConnection('igcse001');
          const first: SQLiteDBConnection = await this._sqlite.createConnection(
          'igcse001',
          false,
          'no-encryption',
          1
              );
           await first.open();
            let getTestTaken: any = await first.query(`SELECT * FROM marking WHERE  test_taken_id='${tt_id}'`);
              this.marking = getTestTaken.values;
            
            let getTest: any = await first.query(`SELECT * FROM test WHERE  id='${test_id}' ORDER BY id DESC LIMIT 1`);
              this.duration = getTest.values;
              this.anoth = this.duration[0].duration;
            //  this.anoth1 = this.duration[0].num_question;
            this.formatTime(this.anoth);

     
    
  
    }  catch (error) {
      console.error(error);
    } finally {
           this._sqlite.closeConnection('igcse001');
        }
    }
   
 

    
  } 
 
}

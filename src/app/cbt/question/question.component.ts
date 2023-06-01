import { Component, Input, OnInit } from '@angular/core';
import { SQLiteConnection, SQLiteDBConnection, capSQLiteChanges, capSQLiteResult } from '@capacitor-community/sqlite';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
 
export class QuestionComponent {
  @Input()
  questionid!: number;
  

  questionsA: any = [];
  options: any = [];
  question_id: any;



  constructor(private _sqlite: DatabaseService) { }

  ngOnInit() {
    this.question_id = this.questionid;
    let testDetails: any = localStorage.getItem('testDetail');
   
    const conv = JSON.parse(testDetails);
    const test_id = conv.type;

   
     
    this.getQuestion(this.questionid);

        
      
    
  }


  async getQuestion(question_id: number) {
    
    try {
      
      // const first: SQLiteDBConnection = await this._sqlite.retrieveConnection('igcse001');
      const first: any = await this._sqlite.createConnection(
        'igcse001',
        false,
        'no-encryption',
        1
      );
     await first.open();
  
    

      const queryQuestion = 'SELECT * FROM questions WHERE id = ?';
      const paramsQuestion = [question_id];
      const quests: any = await first.query(queryQuestion, paramsQuestion);
      this.questionsA = quests.values;

      const queryOptions = 'SELECT * FROM options WHERE question_id = ? ORDER BY id DESC';
      const paramsOptions = [question_id];
      const rest: any = await first.query(queryOptions, paramsOptions);
      this.options = rest.values;
      //this._sqlite.closeConnection('igcse001');
    } catch (error) {
      console.error(error);
    } finally {
      this._sqlite.closeConnection('igcse001');
    }
  }
}
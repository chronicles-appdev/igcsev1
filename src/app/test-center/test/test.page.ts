import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  times: any;
  duration: any;
  anoth!: number;
  anoth1!: number;
  num_quest: any;
  questions: any = [];
  options: any = [];
  question_id: any;
  constructor(private route: ActivatedRoute, private router: Router, private _sqlite: DatabaseService) { }

  ngOnInit() {
     let testDetails: any = localStorage.getItem('testDetail');
   
     const conv = JSON.parse(testDetails);
    const test_id = conv.type;

     this._sqlite.closeAllConnections();
        this.route.params.subscribe(params => {
          if(this.route){
          
          this.question_id = this.route.snapshot.paramMap.get('id');
          }
          this.getQuestion(this.question_id, conv.type);

        

       
        });
 
    //console.log(this.duration);
  //   this.getOptions(this.question_id);
    
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
  
  async getQuestion(question_id: any, test_id: any) {
     let result: any = await this._sqlite.echo('Hi');
     let first = await this._sqlite.createConnection('igcse001', false,'no-encryption', 1,);
    
    
    await first.open();
    
    let quests: any = await first.query(`SELECT * FROM questions WHERE id ='${question_id}' `);
    this.questions = quests.values;

      let rest: any =  await first.query(`SELECT * FROM options WHERE question_id='${question_id}'ORDER BY id DESC `);
    this.options = rest.values;

    
   let getTest: any = await first.query(`SELECT * FROM test WHERE  id='${test_id}' ORDER BY id DESC LIMIT 1`);
    this.duration = getTest.values;
    this.anoth = this.duration[0].duration;
    this.anoth1 = this.duration[0].num_question;
      this.formatTime(this.anoth);
    // this.formatTime(this.duration);
    this._sqlite.closeAllConnections();
  


// let ret: any = await first.query('SELECT * FROM test_taken ORDER BY id DESC LIMIT 1');
   // this.questions = ret;
    //console.log(this.questions);

   // 

    //this.duration = getTest.values.duration;
    
    
    //this.num_quest = getTest.values.num_question;
    
  } 

  async getOptions(question_id: any){
    let first = await this._sqlite.createConnection('igcse001', false,'no-encryption', 1,);
    
    
    await first.open();
    
    
    
       
    
    this._sqlite.closeAllConnections();

  }
}

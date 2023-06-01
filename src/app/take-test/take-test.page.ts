import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { RegisterService } from './../services/register.service';
import { AlertController, LoadingController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { QuestionDb } from '../model/question.model';
import { DbserveService } from '../services/dbserve.service';
@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.page.html',
  styleUrls: ['./take-test.page.scss'],
})
export class TakeTestPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  name!: string;
  myForm: NgForm = new NgForm([], []);

  //myForm: FormGroup;
  fullName!: string;
  //class!: string;
  password!: string;
  email!: string;
  phoneNumber!: string;
  activationCode!: string;
  tests: any[] =[];
  subjects: any[] =[];
  years: any[] =[];

@ViewChild('myModal', { static: true }) myModal!: IonModal;

  registrationForm1!: FormGroup;



  constructor(private _sqlite: DatabaseService, private dbserve: DbserveService, private formBuilder: FormBuilder, private http: HttpClient, private alertController: AlertController, private router: Router,
    private loadingCtrl: LoadingController) {

   
    this.registrationForm1 = this.formBuilder.group({
      year: ['', Validators.required],
       subject: ['', Validators.required],
      type: ['', [Validators.required]]
     
    });
    


  }
 
  async createTest(yeard: any, test: any, subject: any) {
    const yead_id = yeard;
    const test_id = test;
    const subject_id = subject;

    // let result: any = await this._sqlite.echo('Hi');
     let first = await this._sqlite.createConnection('igcse001', false,'no-encryption', 1,);
     await first.open();
    let save: any = await first.query(`INSERT INTO test_taken (year_id, test_id, subject_id) VALUES ('${yead_id}','${test_id}','${subject_id}' )`);
    
    //return save;
    console.log(save);

    let taken: any = await first.query(`SELECT * FROM test_taken ORDER BY id desc limit 1`);
    console.log(taken.values);
    
    for (const useq of taken.values) { 
      let tt_id = useq.id;
       const data1 = {
     
        test_taken_id: tt_id,
        
   };
     // Convert data to JSON string
      const jsonData1 = JSON.stringify(data1);

    // Save JSON string to local storage
      localStorage.setItem('test_takenDetail', jsonData1);
      
        let questions: any = await first.query(`SELECT * FROM questions  ORDER BY RANDOM()  limit 10`);
    
      //console.log(tt_id);
      console.log(questions.values);
      let quests: any = questions.values;
      for (const item of quests) {
        let q_id = item.id;
        let questing: any = await first.query(`INSERT INTO marking (question_id, test_taken_id, selected_id, correct_id) VALUES ('${q_id}','${tt_id}', 0, 0)`);
      }
   
  
    }
    
  
  this._sqlite.closeConnection('igcse001');
  }

  async getTest() {
   
   let ret: any = this.dbserve.getTests();
   // this.tests = ret.values;
  
      let ret1: any =  this.dbserve.getSubjects();
    //this.subjects = ret1.values;
    //console.log(this.subjects);
    
     let ret2: any =  this.dbserve.getYears();
    //this.years = ret2.values;
   // console.log(this.years);
    
     let ret3: any =  this.dbserve.getTestTaken();
 
 

  }




  onSubmit (){
   
   
       const data = {
     
      
       
        type:  this.registrationForm1.value.type,
      
   };
     // Convert data to JSON string
    const jsonData = JSON.stringify(data);
       // Save JSON string to local storage
      localStorage.setItem('testDetail', jsonData);
    let create = this.createTest(this.registrationForm1.value.year, this.registrationForm1.value.type, this.registrationForm1.value.subject);

    console.log(create);
   this._sqlite.closeConnection('igcse001');
    return this.router.navigateByUrl('/instruction');

  }

  
  goHome() {
    return this.router.navigateByUrl('home');
  }
  async ngOnInit() {
    await this._sqlite.initializePlugin();
    this.getTest();
  
  }


}

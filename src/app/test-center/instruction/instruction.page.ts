import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {
  duration!: Number;
  numQuest!: Number;
  test_id!: any;
  test_taken: any[]=[];
  
  constructor(private route: ActivatedRoute, private router: Router, private _sqlite: DatabaseService) {
    
   }


// Example usage: formatTime(5);

  start() {
    
    return this.router.navigateByUrl('cbt');
  }
  async ngAfterViewInit() { 
  
  }
  ngOnInit() {
   // this.getTest();
  }

  async getTest() {
   // const ids: any = id;
    this._sqlite.closeConnection('igcse001');
     let result: any =  this._sqlite.echo('Hi');
    let first: any = this._sqlite.createConnection('igcse001', false, 'no-encryption', 1,);
    
    await first.open();
    

   //let ret: any = await first.query("SELECT * FROM test WHERE id= '${ids}';`);
   let ret: any = await first.query(`SELECT * FROM test_taken`);
    this.test_taken = ret.values;
    console.log(this.test_taken);
  this._sqlite.closeConnection('igcse001');
   

  }


}

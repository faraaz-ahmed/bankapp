import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/transactions.service';
import { Transactions } from 'src/app/classes/transactions';
import { Data} from 'src/app/classes/data';
import * as moment from 'moment';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  public uid: number;
  public ano: number;
  public tr: Array<Transactions>;
  public message: String;
  public data: Data;
  public slicedate: string = '';
  public slicetime: string = '';

  constructor(private route:ActivatedRoute, public _service:TransactionsService) {
    this.data = new Data("","");
   }

  ngOnInit() {
    this.uid=parseInt(this.route.snapshot.paramMap.get("uid"));
  }

  onSubmit(val){
    this.ano=val.fromacc;
    //console.log(this.id);
    //console.log(val);
    //alert(val.fromacc);
    this._service.statement(this.ano).subscribe(data=>{
      if(data.status=="error"){
        this.message="No account exists with Number: "+this.ano;
        this.tr=null;


      }
      else{
      this.tr=data;
      this.message="Last 10 Transactions are below:";
      }
    })
  } 
  onSubmitDate(val){
    //console.log(this.id);
    //console.log(val);
    //alert(val.fromacc);
   // console.log(val.datefrom);

    const momentDate = new Date(this.data.todate); // Replace event.value with your date value
    this.data.todate = moment(momentDate).format("YYYY-MM-DD");
    const momentDate1 = new Date(this.data.fromdate); // Replace event.value with your date value
    this.data.fromdate = moment(momentDate1).format("YYYY-MM-DD");
    // console.log(formattedDate3, "work man pleaasse");

   this.ano=val.fromacc;
  //   const formattedDate = moment(val.datefrom).format("YYYY/MM/DD");
  //   const formattedDate2 = moment(val.dateto).format("YYYY/MM/DD");
  // //  console.log('mytest', moment(this.data.fromdate).format('YYYY/MM/DD'));
  //   this.data.fromdate=formattedDate;
  //   this.data.todate=formattedDate2;
    console.log('my dates', this.data.fromdate, this.data.todate);
    this._service.statementDate(this.ano, this.data).subscribe(datas=>{
      console.log(datas);
      if(datas.status=="error"){
        this.message="No account exists with Number: "+this.ano;
        this.tr=null;
      }
      else{
      this.tr=datas;
      this.message="Last 10 Transactions are below:";
      }
    })
  } 
}

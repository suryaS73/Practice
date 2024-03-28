import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myValue=3;


  name:string="Surya";
  isDisabled=false;
  textId='sampleId';

  show=true;

  src='../favicon.ico';
  width='200px';
  // myClass='success height';

  //Array of class
  myClass={'success': true, 'height': false};

  textStyle='color: red; font-family: cursive;  font-weight:bold';

  employees=['Jhon','Smith','King']

  employee={
    title:'Software Engineer',
    name:'Surya Pavan',
    salary:30000,
    src:'../favicon.ico',
    alt:'Profile Pic'
  }

  getName(data:number):string{
    if(data==1){
      return 'Hello From method';
    }
    return 'Hello From method value '+data;
  }

    clickSave(){
      this.name='Updated' 
    }

    mouseOver(){
      this.name='Mouse over';
    }
    textChange(){
      this.name='Changed';
    }

    //ngFor
    employeeList=['King','Smith','Rahul']

    employeeDetails=[
      {name:'Tom', salary:'10000',address:'USA'},
      {name:'King', salary:'20000',address:'IND'},
      {name:'Smith', salary:'30000',address:'CHN'},
      {name:'Tim', salary:'25000',address:'AME'}
    ]

    refresh(): void{
      this.employeeDetails=[
        {name:'Tom', salary:'10000',address:'USA'},
        {name:'King', salary:'20000',address:'IND'},
        {name:'Smith', salary:'30000',address:'CHN'},
        {name:'Tim', salary:'25000',address:'AME'},
        {name:'S', salary:'25000',address:'AME'},
        {name:'A', salary:'95000',address:'AME'}

      ]
    
    }

    refreshEmployees(index :number ,employee:any): string{
      return employee.name;
    }
}

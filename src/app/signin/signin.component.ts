import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  DAY:string="0";
  NumDay:number=0
  rest:boolean=false
  exe1:string=""
  exe2:string=""
  pop1:boolean=false
  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.checktruedate()
    this.checktruedate2()
  }
  land(){
    this.router.navigate(['']);
  }
  goback(){
    this.router.navigate(['']);
  }
  checktruedate2(){
    this.DAY = JSON.parse (localStorage.getItem('daycount2')|| "0")
    this.NumDay = Number(this.DAY)
    if(this.NumDay==1){
      this.exe1="CHEST"
      this.exe2="ARMS"
      localStorage.setItem("TodayExe1",'Today We Forcus on Upper Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on Upper Body')
    }
    if(this.NumDay==2){
      this.exe1="ABS"
      this.exe2="LEGS"
      localStorage.setItem("TodayExe1",'Today We Forcus on Core and Abs')
      localStorage.setItem("TodayExe2",'Today We Forcus on Core and Abs')
    }
    if(this.NumDay==3){
      this.exe1="BACK"
      this.exe2="SHOULDERS"
      localStorage.setItem("TodayExe1",'Today We Forcus on Lower Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on Lower Body')
    }
    if(this.NumDay==4){
      this.exe1="ABS"
      this.exe2="ARMS"
      localStorage.setItem("TodayExe1",'Today We Forcus on Rest')
      localStorage.setItem("TodayExe2",'Today We Forcus on Rest')
    }
    if(this.NumDay==5){
      this.exe1="CHEST"
      this.exe2="LEGS"
      localStorage.setItem("TodayExe1",'Today We Forcus on  Total Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on  Total Body')
    }
    if(this.NumDay==6){
      this.exe1="BACK"
      this.exe2="ABS"
      localStorage.setItem("TodayExe1",'Today We Forcus on  Core and Abs')
      localStorage.setItem("TodayExe2",'Today We Forcus on  Core and Abs')
    }
    if(this.NumDay==7){ 
      this.exe1="REST"
      this.exe2=""
      localStorage.setItem("TodayExe1",'Today We Forcus on Rest')
      localStorage.setItem("TodayExe2",'Today We Forcus on Rest')
      
    }
  }
  checktruedate(){
    const monthDetails = JSON.parse(localStorage.getItem("monthDetails") || "[]");
    const currentDate = new Date();
    if (monthDetails !== null) {
      for (var i = 0; i < monthDetails.length; i++) {
        console.log("HERE 01",monthDetails)
        for(var j = 0;j<(monthDetails[i].details).length;j++){
          if(monthDetails[i].details[j].today==true){
            console.log("false DAY : ",monthDetails[i].details[j])
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              monthDetails[i].details[j].today = true;
              console.log("true DAY : ",monthDetails[i].details[j])
              this.DAY=monthDetails[i].details[j].day
              console.log("monthDetails : ",monthDetails)
              localStorage.setItem("daycount", JSON.stringify(this.DAY));
              localStorage.setItem("monthDetails", JSON.stringify(monthDetails));
              this.getExeTypes()
            }else{
              monthDetails[i].details[j].today = false;
            }
          }
          if(monthDetails[i].details[j].today==false){
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              monthDetails[i].details[j].today = true;
              console.log("true DAY : ",monthDetails[i].details[j])
              this.DAY=monthDetails[i].details[j].day
              console.log("monthDetails : ",monthDetails)
              localStorage.setItem("monthDetails", JSON.stringify(monthDetails));
              this.getExeTypes()
            }else{
              monthDetails[i].details[j].today = false;
            }
          }
        }
      }
    } else {
         console.log("ERROR CODE 01")
    }
  }
  getExeTypes(){
    const monthDetails = JSON.parse(localStorage.getItem("monthDetails") || "[]");
    const currentDate = new Date();
    if (monthDetails !== null) {
      for (var i = 0; i < monthDetails.length; i++) {

        for(var j = 0;j<(monthDetails[i].details).length;j++){
          if(monthDetails[i].details[j].today==true){
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              console.log("HERE 02",monthDetails[i].details[j])
              for(var k=0; k<(monthDetails[i].details[j].exercises).length;k++){
                console.log("counting exe :",monthDetails[i].details[j].exercises[k].type)
                localStorage.setItem("Cmonth",monthDetails[i].month)
                localStorage.setItem("CDay",monthDetails[i].details[j].dayName)
                if(monthDetails[i].details[j].exercises[k].type=="00"){
                  this.rest=true
                  localStorage.removeItem("TodayExe1")
                  localStorage.removeItem("TodayExe2")
                  localStorage.setItem("TodayExe1",'Rest')
                }else{
                  this.rest=false
                  if(monthDetails[i].details[j].exercises[k].type=="01"){
                    this.exe1=monthDetails[i].details[j].exercises[k].name
                    localStorage.setItem("TodayExe1",this.exe1)
                  }
                  if(monthDetails[i].details[j].exercises[k].type=="02"){
                    this.exe2=monthDetails[i].details[j].exercises[k].name
                    localStorage.setItem("TodayExe2",this.exe2)
                  }
                  console.log("EXE1:",this.exe1,"EXE2:",this.exe2)
                }
                console.log("REST DAY ? : ", this.rest)
              }
            }
          }
        }
      }
    } else {
         console.log("ERROR CODE 01")
    }
  }
  shiftingRoom0(){
    const audio = new Audio('../../assets/Sounds/sword.mp3');
      audio.play();
    this.pop1=true
  }
  shiftingRoom(){
    const audio = new Audio('../../assets/Sounds/electro.mp3');
    
      audio.play(); 
    this.pop1=false
    this.router.navigate(['shiftingroom']);
  }
  popClear(){
    const audio = new Audio('../../assets/Sounds/sword.mp3');
      audio.play(); 
    this.pop1=false
  }
}

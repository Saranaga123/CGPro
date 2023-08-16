import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  audio: HTMLAudioElement | null = null;
  DAY:string="0";
  NumDay:number=0
  rest:boolean=false
  exe1:string=""
  exe2:string=""
  todayEX:any={}
  pop1:boolean=false
  exType:string=""
  exList:any=[
    //day1
        "Warm Up Run",
        "Bridge Knee Raise",
        "Butterfly Dips",
        "Front Leg Raise",
        "Side Bends",
        "Twist",
        "Wide Twist" ,
    //day2
        "Warm Up Run",
        "Bridges",
        "Half Wipes",
        "Knee to Elbow",
        "Leg Pull-In",
        "Plank Leg Extension",
        "Reverse Crunch" ,
    //day3
        "Warm Up Run",
        "Back Leg Raise",
        "Leg Extension",
        "Leg Raise",
        "Oblique Side Leg Raise",
        "Side Leg Raise",
        "Strech Hold",
    //day4
        "Rest Day" ,
    //day5
        "Warm Up Run",
        "Bridge Knee Raise",
        "Butterfly Dips",
        "Front Leg Raise",
        "Side Bends",
        "Twist",
        "Wide Twist" ,
    //day6
        "Warm Up Run",
        "Bridges",
        "Half Wipes",
        "Knee to Elbow",
        "Leg Pull-In",
        "Plank Leg Extension",
        "Reverse Crunch",
    //day7
        "Rest Day"
  ]
  exName:string=this.exList[0]
  imgList:any=[
    // day1
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/BridgeKneeRaise.png",
    "../../assets/EX/ButterFlyDips.png",
    "../../assets/EX/FrontLegRaise.png",
    "../../assets/EX/SideBends.png",
    "../../assets/EX/Twist.png",
    "../../assets/EX/WideTwist.png",
    // day2
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/Bridges.png",
    "../../assets/EX/HalfWipes.png",
    "../../assets/EX/KneeToElbow.png",
    "../../assets/EX/LegPullIn.png",
    "../../assets/EX/PlankLegExtension.png",
    "../../assets/EX/ReverceCrunch.png",
    // day3
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/BackLegRaise.png",
    "../../assets/EX/LegExtension.png",
    "../../assets/EX/LegRaise.png",
    "../../assets/EX/ObliqueSideLegRaise.png",
    "../../assets/EX/SideLegRaise.png",
    "../../assets/EX/StretchHold.png",
    // day4
    "../../assets/EX/rest.jpg", 
    // day5
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/BridgeKneeRaise.png",
    "../../assets/EX/ButterFlyDips.png",
    "../../assets/EX/FrontLegRaise.png",
    "../../assets/EX/SideBends.png",
    "../../assets/EX/Twist.png",
    "../../assets/EX/WideTwist.png", 
    //day6
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/Bridges.png",
    "../../assets/EX/HalfWipes.png",
    "../../assets/EX/KneeToElbow.png",
    "../../assets/EX/LegPullIn.png",
    "../../assets/EX/PlankLegExtension.png",
    "../../assets/EX/ReverceCrunch.png", 
    // day7
    "../../assets/EX/rest.jpg", 
  ]
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
      this.audio = new Audio('../../assets/Sounds/day1.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[1],
        this.imgList[2],
        this.imgList[3],
        this.imgList[4],
        this.imgList[5],
        this.imgList[6],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      localStorage.setItem("TodayExe1",'Today We Forcus on Upper Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on Upper Body')
    }
    if(this.NumDay==2){
      this.audio = new Audio('../../assets/Sounds/day2.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[8],
        this.imgList[9],
        this.imgList[10],
        this.imgList[11],
        this.imgList[12],
        this.imgList[13],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      localStorage.setItem("TodayExe1",'Today We Forcus on Core and Abs')
      localStorage.setItem("TodayExe2",'Today We Forcus on Core and Abs')
    }
    if(this.NumDay==3){
      this.audio = new Audio('../../assets/Sounds/day3.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[15],
        this.imgList[16],
        this.imgList[17],
        this.imgList[18],
        this.imgList[19],
        this.imgList[20],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      
      localStorage.setItem("TodayExe1",'Today We Forcus on Lower Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on Lower Body')
    }
    if(this.NumDay==4){
      this.audio = new Audio('../../assets/Sounds/day4.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      localStorage.setItem("TodayExe1",'Today We Forcus on Rest')
      localStorage.setItem("TodayExe2",'Today We Forcus on Rest')
    }
    if(this.NumDay==5){
      this.audio = new Audio('../../assets/Sounds/day5.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[23],
        this.imgList[24],
        this.imgList[25],
        this.imgList[26],
        this.imgList[27],
        this.imgList[28],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      localStorage.setItem("TodayExe1",'Today We Forcus on  Total Body')
      localStorage.setItem("TodayExe2",'Today We Forcus on  Total Body')
    }
    if(this.NumDay==6){
      this.audio = new Audio('../../assets/Sounds/day6.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[30],
        this.imgList[31],
        this.imgList[32],
        this.imgList[33],
        this.imgList[34],
        this.imgList[35],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
      localStorage.setItem("TodayExe1",'Today We Forcus on  Core and Abs')
      localStorage.setItem("TodayExe2",'Today We Forcus on  Core and Abs')
    }
    if(this.NumDay==7){ 
      this.audio = new Audio('../../assets/Sounds/day7.mp3');
      this.audio.play();
      const day1Exercises = [
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
        this.imgList[21],
      ]; 
      this.todayEX = day1Exercises
      console.log("this.todayEX",this.todayEX) 
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
    if (this.audio) {
      this.audio.pause();
    } else {
      console.log("here");
    }
    this.audio = null; 
    this.audio = new Audio('../../assets/Sounds/sword.mp3');
      this.audio.play();
    this.pop1=true
  }
  shiftingRoom(){
    this.audio = new Audio('../../assets/Sounds/electro.mp3');
    
    this.audio.play(); 
    this.pop1=false
    this.router.navigate(['shiftingroom']);
  }
  popClear(){
    this.audio = new Audio('../../assets/Sounds/sword.mp3');
    this.audio.play(); 
    this.pop1=false
  }
}

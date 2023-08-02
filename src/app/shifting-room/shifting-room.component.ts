import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shifting-room',
  templateUrl: './shifting-room.component.html',
  styleUrls: ['./shifting-room.component.css']
})
export class ShiftingRoomComponent {
  audio: HTMLAudioElement | null = null;
  currentStep:number=1
  fullCount:number=10
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
  imgsrc:string=this.imgList[28]
  reps:number=10
  sets:number=3
  SSDATA:any={}
  exe1:string=""
  exe2:string=""
  CDay:string=""
  BiginCounter:number=0
  EndCounter:number=0
  finish:boolean=false
  repAdd:number=0
  minutes: number = 15;
  seconds: number = 0;
  initialMinutes: number = 15;
  initialSeconds: number = 0;
  countdownInterval: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    console.log("exList Length : ",this.exList.length)
    this.getData()
    this.repAdd=Math.round((JSON.parse(localStorage.getItem("daycount") || "0"))/4)
    this.reps=this.reps+this.repAdd
    console.log("this.reps : ",this.reps)
  }
  getData(){
    this.exe1=localStorage.getItem("TodayExe1") || ""
    console.log("exe1",this.exe1 ) 

    this.CDay =localStorage.getItem("daycount2") || ""
    console.log("this.CDay",this.CDay)
    this.exType = this.exe1
    this.currentStep = 1

    if(this.CDay=="1"){
      this.fullCount=7
      this.BiginCounter=0
      this.EndCounter=6
      this.exName=this.exList[0]
      this.imgsrc=this.imgList[0]
    }
    if(this.CDay=="2"){
      this.fullCount=7
      this.BiginCounter=7
      this.EndCounter=13
      this.exName=this.exList[7]
      this.imgsrc=this.imgList[7]
    }
    if(this.CDay=="3"){
      this.fullCount=7
      this.BiginCounter=14
      this.EndCounter=20
      this.exName=this.exList[14]
      this.imgsrc=this.imgList[14]
    }
    if(this.CDay=="4"){
      this.fullCount=1
      this.BiginCounter=20
      this.EndCounter=20
      this.exName=this.exList[21]
      this.imgsrc=this.imgList[21]
    }
    if(this.CDay=="5"){
      this.fullCount=7
      this.BiginCounter=22
      this.EndCounter=28
      this.exName=this.exList[22]
      this.imgsrc=this.imgList[22]
    }
    if(this.CDay=="6"){
      this.fullCount=7
      this.BiginCounter=29
      this.EndCounter=35
      this.exName=this.exList[29]
      this.imgsrc=this.imgList[29]
    }
    if(this.CDay=="7"){
      this.fullCount=1
      this.BiginCounter=36
      this.EndCounter=36
      this.exName=this.exList[36]
      this.imgsrc=this.imgList[36]
    }
  }
  next(){
    this.resetCountdown()
    clearInterval(this.countdownInterval);
    const audio = new Audio('../../assets/Sounds/electro.mp3');
      audio.play();
    console.log("this.BiginCounter",this.BiginCounter)
    console.log("this.EndCounter",this.EndCounter)
    if(this.BiginCounter<this.EndCounter){
      this.BiginCounter++
      this.currentStep++
      this.exName=this.exList[this.BiginCounter]
      this.imgsrc=this.imgList[this.BiginCounter]
    }else{
      this.finish=true 
    }
  }
  back(){
    if(this.BiginCounter<this.EndCounter){
      this.BiginCounter--
      this.currentStep--
      this.exName=this.exList[this.BiginCounter]
      this.imgsrc=this.imgList[this.BiginCounter]
    }else{
      this.finish=true
      this.exType
    }
  }
  finished(){
    this.router.navigate(['finishroom']);
  }
  startrun(){
    this.audio = new Audio('../../assets/Sounds/run music.mp3');
    this.audio.play();
    this.countdownInterval = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          // Countdown is complete
          clearInterval(this.countdownInterval);
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }
  stopCountdown(): void {
    clearInterval(this.countdownInterval);
  }
  resetCountdown(): void {
    if (this.audio) {
      this.audio.pause();
    } else {
      console.log("here");
    }
    this.audio = null; 
    this.stopCountdown();
    this.minutes = this.initialMinutes;
    this.seconds = this.initialSeconds;
  }
}

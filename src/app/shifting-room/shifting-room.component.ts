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
  rest:boolean=false;
  exNameSpeak:string="1";
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
  countdownready = 15; 
  countdownrest = 10; 
  readyInterval: any;
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
  restcoutdown(){
    this.countdownrest=20
    this.startrest()
  }
  skiprest(){
    if (this.audio) {
      this.audio.pause();
    } else {
      console.log("here");
    }
    this.rest=false
    this.next()
  }
  next(){
    this.resetCountdown()
    clearInterval(this.countdownInterval);
    console.log("this.BiginCounter",this.BiginCounter)
    console.log("Ex type",this.exList[this.BiginCounter+1])
    console.log("this.EndCounter",this.EndCounter)
    this.exNameSpeak = (this.BiginCounter+1).toString()
    console.log("../../assets/Sounds/ex/",this.BiginCounter,'.mp3')
    if(this.CDay=="4" || this.CDay=="7"){ 
    }else{
      if(this.BiginCounter!=this.EndCounter){
        const audionext = new Audio('../../assets/Sounds/start.mp3');
        audionext.play();
        audionext.onended = () => {
          const audio = new Audio(`../../assets/Sounds/ex/${this.exNameSpeak}.mp3`);
          audio.play();
        };
      } 
    } 
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
  dayc:number=0;
  dayc2:number=0;
  finished(){
    this.dayc = Number(localStorage.getItem('daycount') || 0);
    this.dayc2 = Number(localStorage.getItem('daycount2') || 0);
    if(this.dayc2==7){
      var dc = this.dayc
      var dt = dc+1
      var dc2 = 0
      var dt2 = dc2+1
      console.log("c0:",this.dayc)
      localStorage.setItem('daycount',JSON.stringify(dt))
      localStorage.setItem('daycount2',JSON.stringify(dt2))
      this.router.navigate(['']);
    }else{
      var dc = this.dayc
      var dt = dc+1
      var dc2 = this.dayc2
      var dt2 = dc2+1
      console.log("c0:",this.dayc)
      localStorage.setItem('daycount',JSON.stringify(dt))
      localStorage.setItem('daycount2',JSON.stringify(dt2))
      this.router.navigate(['']);
    }
    this.router.navigate(['']);
  }
  home(){
    this.router.navigate(['']);
    if (this.audio) {
      this.audio.pause();
    } else {
      console.log("here");
    }
    this.audio = null; 
    this.stopCountdown();
  }
  runstarted:boolean=false
  runstarted2:boolean=false
  startrest(){
    this.rest=true 
    this.readyInterval = setInterval(() => {
      if (this.countdownrest === 0) {
        // "Ready" countdown is complete
        
         
      }else if(this.countdownrest === 7){
        
        this.restaudio()
        this.countdownrest--;
      } else {
        if(this.countdownrest > 5){
          this.audio = new Audio('../../assets/Sounds/clock.mp3');
          this.audio.play();
          this.countdownrest--;
        } else{
          this.countdownrest--;
        }
      }
    }, 1000);
  }
  restaudio(){
    const audiorest = new Audio('../../assets/Sounds/nextplease.mp3');
    audiorest.play();
      audiorest.onended = () => {
         clearInterval(this.readyInterval);
         this.rest=false
         this.next() 
      };  
  }
  startrun(){
    this.runstarted=true
    this.readyInterval = setInterval(() => {
      if (this.countdownready === 0) {
        // "Ready" countdown is complete
        clearInterval(this.readyInterval);
        this.audio = new Audio('../../assets/Sounds/game.mp3');
        this.audio.play();
        this.runstarted2=true
        this.startrun2();
      } else {
        this.audio = new Audio('../../assets/Sounds/clock.mp3');
        this.audio.play();
        this.countdownready--;
      }
    }, 1000);
  }
  startrun2(){
    
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
    clearInterval(this.readyInterval);
    this.runstarted2=false
    this.countdownready=15
  }
  resetCountdown(): void {
    this.runstarted=false
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

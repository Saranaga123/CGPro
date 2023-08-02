import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shifting-room',
  templateUrl: './shifting-room.component.html',
  styleUrls: ['./shifting-room.component.css']
})
export class ShiftingRoomComponent {
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
    "../../assets/EX/ARMS/DB CURL.jpg",
    "../../assets/EX/ARMS/EZ BAR CURL.jpg",
    "../../assets/EX/ARMS/HAMMER CURL.jpg",
    "../../assets/EX/ARMS/OVERHEAD EXTENSION.jpg",
    "../../assets/EX/ARMS/SKULL CRUSHERS.jpg",
    // day3
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/SHOULDERS/BARBELL STANDING PRESS.jpg",
    "../../assets/EX/SHOULDERS/SEATED DUMBBELL PRESS.jpg",
    "../../assets/EX/SHOULDERS/ARNOLD PRESS.jpg",
    "../../assets/EX/SHOULDERS/LATERAL RAISE.jpg",
    "../../assets/EX/SHOULDERS/BENT OVER REVERSE FLY.jpg",
    "../../assets/EX/SHOULDERS/UPRIGHT ROW.jpg",
    "../../assets/EX/SHOULDERS/FRONT RAISES.jpg",
    // day4
    "../../assets/EX/LEGS/Back Squartes.PNG",
    "../../assets/EX/LEGS/Lunges.PNG",
    "../../assets/EX/LEGS/Romanian Deadlifts.PNG",
    "../../assets/EX/LEGS/Hip Thrusts.PNG",
    "../../assets/EX/LEGS/Calf Raises.PNG",
    "../../assets/EX/LEGS/Box Squartes.PNG",
    // day5
    "../../assets/EX/WarmUp.png",
    "../../assets/EX/BACK/Diver Push Ups.PNG",
    "../../assets/EX/BACK/Half Squat.PNG",
    "../../assets/EX/BACK/Double Chest Expansion.PNG",
    "../../assets/EX/BACK/LawnMovers.PNG",
    "../../assets/EX/BACK/DeadLifts.PNG",
    "../../assets/EX/BACK/Wall Arm Slides.PNG", 
  ]
  imgsrc:string=this.imgList[28]
  reps:number=10
  sets:number=3
  SSDATA:any={}
  exe1:string=""
  exe2:string=""
  CDay:string=""
  BiginCounter1:number=0
  EndCounter1:number=0
  BiginCounter2:number=0
  EndCounter2:number=0
  finish:boolean=false
  repAdd:number=0
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
      this.BiginCounter1=0
      this.EndCounter1=1
      this.BiginCounter2=2
      this.EndCounter2=6
      this.exName=this.exList[0]
      this.imgsrc=this.imgList[0]
    }
    if(this.CDay=="2"){
      this.fullCount=7
      this.BiginCounter1=7
      this.EndCounter1=8
      this.BiginCounter2=9
      this.EndCounter2=13
      this.exName=this.exList[28]
      this.imgsrc=this.imgList[28]
    }
    if(this.CDay=="3"){
      this.fullCount=7
      this.BiginCounter1=14
      this.EndCounter1=15
      this.BiginCounter2=16
      this.EndCounter2=20
      this.exName=this.exList[23]
      this.imgsrc=this.imgList[23]
    }
    if(this.CDay=="4"){
      this.fullCount=1
      this.BiginCounter1=20
      this.EndCounter1=22
      this.BiginCounter2=22
      this.EndCounter2=22
      this.exName=this.exList[28]
      this.imgsrc=this.imgList[28]
    }
    if(this.CDay=="5"){
      this.fullCount=7
      this.BiginCounter1=22
      this.EndCounter1=23
      this.BiginCounter2=24
      this.EndCounter2=28
      this.exName=this.exList[0]
      this.imgsrc=this.imgList[0]
    }
    if(this.CDay=="6"){
      this.fullCount=1
      this.BiginCounter1=22
      this.EndCounter1=28
      this.BiginCounter2=29
      this.EndCounter2=63
      this.exName=this.exList[22]
      this.imgsrc=this.imgList[22]
    }
  }
  next(){
    const audio = new Audio('../../assets/Sounds/electro.mp3');
      audio.play();
    console.log("this.BiginCounter1",this.BiginCounter1)
    console.log("this.EndCounter1",this.EndCounter1)
    if(this.BiginCounter1<this.EndCounter1){
      this.BiginCounter1++
      this.currentStep++
      this.exName=this.exList[this.BiginCounter1]
      this.imgsrc=this.imgList[this.BiginCounter1]
    }else if(this.BiginCounter2<=this.EndCounter2){
      this.exType=this.exe2

      this.currentStep++
      this.exName=this.exList[this.BiginCounter2]
      this.imgsrc=this.imgList[this.BiginCounter2]
      this.BiginCounter2++
    }else{
      this.finish=true
      this.exType
    }
  }
  back(){
    if(this.BiginCounter1<this.EndCounter1){
      this.BiginCounter1--
      this.currentStep--
      this.exName=this.exList[this.BiginCounter1]
      this.imgsrc=this.imgList[this.BiginCounter1]
    }else if(this.BiginCounter2<=this.EndCounter2){
      this.exType=this.exe2

      this.currentStep--
      this.exName=this.exList[this.BiginCounter2]
      this.imgsrc=this.imgList[this.BiginCounter2]
      this.BiginCounter2--
    }else{
      this.finish=true
      this.exType
    }
  }
  finished(){
    this.router.navigate(['finishroom']);
  }
}

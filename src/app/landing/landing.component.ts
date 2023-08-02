import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) { }
  BerserkPoints:number=0
  s1:boolean=false
  s2:boolean=false
  s3:boolean=false
  s4:boolean=false
  s5:boolean=false
  s6:boolean=false
  s7:boolean=false
  s8:boolean=false
  s9:boolean=false
  s10:boolean=false
  s11:boolean=false
  s12:boolean=false
  ssrc1:string="../../assets/logo/padlock.png"
  ssrc2:string="../../assets/logo/padlock.png"
  ssrc3:string="../../assets/logo/padlock.png"
  ssrc4:string="../../assets/logo/padlock.png"
  ssrc5:string="../../assets/logo/padlock.png"
  ssrc6:string="../../assets/logo/padlock.png"
  ssrc7:string="../../assets/logo/padlock.png"
  ssrc8:string="../../assets/logo/padlock.png"
  ssrc9:string="../../assets/logo/padlock.png"
  ssrc10:string="../../assets/logo/padlock.png"
  ssrc11:string="../../assets/logo/padlock.png"
  ssrc12:string="../../assets/logo/padlock.png"
  showBerserkPoints:boolean=false
  showIcons:boolean=true
  showSettings:boolean=false
  bp:string="";
  day:string="";
  pop1:boolean=false
  settingspop:boolean=false;
  settingKey:string=""

  ngOnInit(): void {
    // this.createUserData()
    this.createUserData2()
    this.BerserkPoints=JSON.parse(localStorage.getItem("BerserkPoints")||'0')
    setTimeout(() => {
      const audio = new Audio('../../assets/Sounds/electro.mp3');
      audio.play();
    }, 1000);
  }
  Update(){
    this.pop1=true
  }

  activateBerserk(){
    this.settingspop=false
    this.showBerserkPoints=true
    this.showIcons=false
    this.showSettings=false
  }
  popClear(){
    this.pop1=false
    this.settingspop=false
  }
  landingRoom(){
    this.pop1=false
    this.settingspop=false
    localStorage.setItem("BerserkPoints",(this.bp))
    localStorage.setItem("daycount",(this.day))

    const numericDay = parseInt(this.day, 10); // Convert the string to an integer
    const result = (numericDay % 7) + 1;
    localStorage.setItem("daycount2", result.toString());
    this.closepop()
  }
  activateSettingsPop(){ 
    // this.settingspop=true
  }
  activateSettings(){
    if(this.settingKey=="Kk"||this.settingKey=="kk"||this.settingKey=="KK"){
      this.settingKey=""
      this.settingspop=false
      this.showBerserkPoints=false
      this.showIcons=false
      this.showSettings=true
      this.bp=JSON.parse(localStorage.getItem("BerserkPoints")||'0')
      this.day=JSON.parse(localStorage.getItem("daycount")||'0')
    } 
  }
  popClear2(){
    this.settingspop=false
  }
  closepop(){
    this.settingspop=false
    this.showBerserkPoints=false
    this.showIcons=true
    this.showSettings=false
    this.BerserkPoints=JSON.parse(localStorage.getItem("BerserkPoints")||'0')
  }
  sign(){
    console.log("Sign")
    const audio = new Audio('../../assets/Sounds/sword.mp3');
      audio.play();
    if(localStorage.getItem('User')=="FreshBlood"){
      this.router.navigate(['signin']);
    }else{
      this.router.navigate(['signin']);
    }
  }
  Dcount:number=0
  createUserData2(){
    const storedDetails = localStorage.getItem('storedDetails');
    if (storedDetails) {
      localStorage.setItem('User', 'Shifter');
      this.s1=JSON.parse(localStorage.getItem('s1')||'0')
      this.s2=JSON.parse(localStorage.getItem('s2')||'0')
      this.s3=JSON.parse(localStorage.getItem('s3')||'0')
      this.s4=JSON.parse(localStorage.getItem('s4')||'0')
      this.s5=JSON.parse(localStorage.getItem('s5')||'0')
      this.s6=JSON.parse(localStorage.getItem('s6')||'0')
      this.s7=JSON.parse(localStorage.getItem('s7')||'0')
      this.s8=JSON.parse(localStorage.getItem('s8')||'0')
      this.s9=JSON.parse(localStorage.getItem('s9')||'0')
      this.s10=JSON.parse(localStorage.getItem('s10')||'0')
      this.s11=JSON.parse(localStorage.getItem('s11')||'0')
      this.s12=JSON.parse(localStorage.getItem('s12')||'0')
      if(this.s1===true){
        console.log('test')
        this.ssrc1 = "../../assets/logo/s1.jpg"
      }else{
        this.ssrc1 = "../../assets/logo/padlock.png"
      }
      if(this.s2===true){
        console.log('test')
        this.ssrc2 = "../../assets/logo/s2.jpg"
      }else{
        this.ssrc2 = "../../assets/logo/padlock.png"
      }
      if(this.s3===true){
        console.log('test')
        this.ssrc3 = "../../assets/logo/s3.jpg"
      }else{
        this.ssrc3 = "../../assets/logo/padlock.png"
      }
      if(this.s4===true){
        console.log('test')
        this.ssrc4 = "../../assets/logo/s4.jpg"
      }else{
        this.ssrc4 = "../../assets/logo/padlock.png"
      }
      if(this.s5===true){
        console.log('test')
        this.ssrc5 = "../../assets/logo/s5.jpg"
      }else{
        this.ssrc5 = "../../assets/logo/padlock.png"
      }
      if(this.s6===true){
        console.log('test')
        this.ssrc6 = "../../assets/logo/s6.jpg"
      }else{
        this.ssrc6 = "../../assets/logo/padlock.png"
      }
      if(this.s7===true){
        console.log('test')
        this.ssrc7 = "../../assets/logo/s7.jpg"
      }else{
        this.ssrc7 = "../../assets/logo/padlock.png"
      }
      if(this.s8===true){
        console.log('test')
        this.ssrc8 = "../../assets/logo/s8.jpg"
      }else{
        this.ssrc8 = "../../assets/logo/padlock.png"
      }
      if(this.s9===true){
        console.log('test')
        this.ssrc9 = "../../assets/logo/s9.jpg"
      }else{
        this.ssrc9 = "../../assets/logo/padlock.png"
      }
      if(this.s10===true){
        console.log('test')
        this.ssrc10 = "../../assets/logo/s10.jpg"
      }else{
        this.ssrc10 = "../../assets/logo/padlock.png"
      }
      if(this.s11===true){
        console.log('test')
        this.ssrc11 = "../../assets/logo/s11.jpg"
      }else{
        this.ssrc11 = "../../assets/logo/padlock.png"
      }
      if(this.s12===true){
        console.log('test')
        this.ssrc12 = "../../assets/logo/s12.jpg"
      }else{
        this.ssrc12 = "../../assets/logo/padlock.png"
      }
    } else {
      localStorage.setItem('storedDetails', 'yes');
      localStorage.setItem('daycount', '1');
      localStorage.setItem('daycount2', '1');
      localStorage.setItem('User', 'FreshBlood');
      localStorage.setItem('BerserkPoints','0')
      localStorage.setItem('s1','false')
      localStorage.setItem('s2','false')
      localStorage.setItem('s3','false')
      localStorage.setItem('s4','false')
      localStorage.setItem('s5','false')
      localStorage.setItem('s6','false')
      localStorage.setItem('s7','false')
      localStorage.setItem('s8','false')
      localStorage.setItem('s9','false')
      localStorage.setItem('s10','false')
      localStorage.setItem('s11','false')
      localStorage.setItem('s12','false')
    }
    this.Dcount = Number(localStorage.getItem('daycount') || 0);

    console.log("this.Dcount",this.Dcount)
  }
  createUserData(){
    interface Exercise {
      type: string;
      name: string;
      count: number;
    }
    interface DayType {
      type: string;
      name: string;
    }
    interface DayDetail {
      day: number;
      dayName: string;
      checkIn: string;
      completed: string;
      dateString: string;
      sampleString: string;
      today:boolean;
      exercises: Exercise[];
      dayTypes: DayType[];
    }
    interface MonthDetail {
      month: string;
      details: DayDetail[];
    }
    const monthDetails: MonthDetail[] = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();
    let dayCount = 1;
    let startingCount = 10;
    for (let month = currentMonth; month < 12; month++) {
      const date = new Date(currentYear, month, 1);
      const monthName = date.toLocaleString('en-us', { month: 'long' });
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
      const monthDetail: MonthDetail = {
        month: monthName,
        details: []
      };
      const startDay = (month === currentMonth) ? currentDay : 1;
      let weekCount = 0;
      let countIncrement = 0;
      for (let day = startDay; day <= daysInMonth; day++) {
        const dateString = `${month + 1}-${day}-${currentYear}`;
        const sampleString = `ShapeShifting LOG for ${dateString}`;
        const dayName = new Date(currentYear, month, day).toLocaleString('en-us', { weekday: 'long' });
        const dayDetail: DayDetail = {
          day: dayCount,
          dayName,
          dateString,
          sampleString,
          dayTypes: [],
          exercises: [],
          checkIn: '',
          completed: '',
          today: day === today.getDate()
        };
        if (dayName === 'Sunday') {
          const exercise: Exercise = {
            type: '00',
            name: 'REST',
            count: 0
          };
          const Type: DayType = {
            type: '00',
            name: 'REST'
          };
          dayDetail.exercises.push(exercise);
          dayDetail.dayTypes.push(Type);
        }
        if (dayName === 'Monday') {
          weekCount++;
          if (weekCount > 1) {
            countIncrement += 2;
          }
          const exercise1: Exercise = {
            type: '01',
            name: 'CHEST',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'ARMS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        if (dayName === 'Tuesday') {
          const exercise1: Exercise = {
            type: '01',
            name: 'ABS',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'LEGS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        if (dayName === 'Wednesday') {
          const exercise1: Exercise = {
            type: '01',
            name: 'BACK',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'SHOULDERS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        if (dayName === 'Thursday') {
          const exercise1: Exercise = {
            type: '01',
            name: 'ABS',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'ARMS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        if (dayName === 'Friday') {
          const exercise1: Exercise = {
            type: '01',
            name: 'CHEST',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'LEGS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        if (dayName === 'Saturday') {
          const exercise1: Exercise = {
            type: '01',
            name: 'BACK',
            count: startingCount + countIncrement
          };
          const exercise2: Exercise = {
            type: '02',
            name: 'ABS',
            count: startingCount + countIncrement
          };
          dayDetail.exercises.push(exercise1, exercise2);
        }
        monthDetail.details.push(dayDetail);
        dayCount++;
      }
      monthDetails.push(monthDetail);
    }
    console.log(monthDetails);
    const storedMonthDetails = localStorage.getItem('monthDetails');
    if (storedMonthDetails) {
      const parsedMonthDetails = JSON.parse(storedMonthDetails);
      localStorage.setItem('User', 'Shifter');
      console.log('Data Already there:', parsedMonthDetails);
      this.s1=JSON.parse(localStorage.getItem('s1')||'0')
      this.s2=JSON.parse(localStorage.getItem('s2')||'0')
      this.s3=JSON.parse(localStorage.getItem('s3')||'0')
      this.s4=JSON.parse(localStorage.getItem('s4')||'0')
      this.s5=JSON.parse(localStorage.getItem('s5')||'0')
      this.s6=JSON.parse(localStorage.getItem('s6')||'0')
      this.s7=JSON.parse(localStorage.getItem('s7')||'0')
      this.s8=JSON.parse(localStorage.getItem('s8')||'0')
      this.s9=JSON.parse(localStorage.getItem('s9')||'0')
      this.s10=JSON.parse(localStorage.getItem('s10')||'0')
      this.s11=JSON.parse(localStorage.getItem('s11')||'0')
      this.s12=JSON.parse(localStorage.getItem('s12')||'0')
      if(this.s1===true){
        console.log('test')
        this.ssrc1 = "../../assets/logo/s1.jpg"
      }else{
        this.ssrc1 = "../../assets/logo/padlock.png"
      }
      if(this.s2===true){
        console.log('test')
        this.ssrc2 = "../../assets/logo/s2.jpg"
      }else{
        this.ssrc2 = "../../assets/logo/padlock.png"
      }
      if(this.s3===true){
        console.log('test')
        this.ssrc3 = "../../assets/logo/s3.jpg"
      }else{
        this.ssrc3 = "../../assets/logo/padlock.png"
      }
      if(this.s4===true){
        console.log('test')
        this.ssrc4 = "../../assets/logo/s4.jpg"
      }else{
        this.ssrc4 = "../../assets/logo/padlock.png"
      }
      if(this.s5===true){
        console.log('test')
        this.ssrc5 = "../../assets/logo/s5.jpg"
      }else{
        this.ssrc5 = "../../assets/logo/padlock.png"
      }
      if(this.s6===true){
        console.log('test')
        this.ssrc6 = "../../assets/logo/s6.jpg"
      }else{
        this.ssrc6 = "../../assets/logo/padlock.png"
      }
      if(this.s7===true){
        console.log('test')
        this.ssrc7 = "../../assets/logo/s7.jpg"
      }else{
        this.ssrc7 = "../../assets/logo/padlock.png"
      }
      if(this.s8===true){
        console.log('test')
        this.ssrc8 = "../../assets/logo/s8.jpg"
      }else{
        this.ssrc8 = "../../assets/logo/padlock.png"
      }
      if(this.s9===true){
        console.log('test')
        this.ssrc9 = "../../assets/logo/s9.jpg"
      }else{
        this.ssrc9 = "../../assets/logo/padlock.png"
      }
      if(this.s10===true){
        console.log('test')
        this.ssrc10 = "../../assets/logo/s10.jpg"
      }else{
        this.ssrc10 = "../../assets/logo/padlock.png"
      }
      if(this.s11===true){
        console.log('test')
        this.ssrc11 = "../../assets/logo/s11.jpg"
      }else{
        this.ssrc11 = "../../assets/logo/padlock.png"
      }
      if(this.s12===true){
        console.log('test')
        this.ssrc12 = "../../assets/logo/s12.jpg"
      }else{
        this.ssrc12 = "../../assets/logo/padlock.png"
      }
    } else {
      localStorage.setItem('monthDetails', JSON.stringify(monthDetails));
      localStorage.setItem('User', 'FreshBlood');
      localStorage.setItem('BerserkPoints','0')
      localStorage.setItem('s1','false')
      localStorage.setItem('s2','false')
      localStorage.setItem('s3','false')
      localStorage.setItem('s4','false')
      localStorage.setItem('s5','false')
      localStorage.setItem('s6','false')
      localStorage.setItem('s7','false')
      localStorage.setItem('s8','false')
      localStorage.setItem('s9','false')
      localStorage.setItem('s10','false')
      localStorage.setItem('s11','false')
      localStorage.setItem('s12','false')
      console.log('New User Data:', monthDetails);
    }
  }
  s1Release(){
    if(this.s1===false&&this.BerserkPoints>=10){
      this.BerserkPoints = this.BerserkPoints-10
      this.s1=true
      this.ssrc1 = "../../assets/logo/s1.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s1','true')
    }
  }
  s2Release(){
    if(this.s2===false&&this.BerserkPoints>=20){
      this.BerserkPoints = this.BerserkPoints-20
      this.s2=true
      this.ssrc2 = "../../assets/logo/s2.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s2','true')
    }
  }
  s3Release(){
    if(this.s3===false&&this.BerserkPoints>=50){
      this.BerserkPoints = this.BerserkPoints-50
      this.s3=true
      this.ssrc3 = "../../assets/logo/s3.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s3','true')
    }
  }
  s4Release(){
    if(this.s4===false&&this.BerserkPoints>=100){
      this.BerserkPoints = this.BerserkPoints-100
      this.s4=true
      this.ssrc4 = "../../assets/logo/s4.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s4','true')
    }
  }
  s5Release(){
    if(this.s5===false&&this.BerserkPoints>=100){
      this.BerserkPoints = this.BerserkPoints-100
      this.s5=true
      this.ssrc5 = "../../assets/logo/s5.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s5','true')
    }
  }
  s6Release(){
    if(this.s6===false&&this.BerserkPoints>=200){
      this.BerserkPoints = this.BerserkPoints-200
      this.s6=true
      this.ssrc6 = "../../assets/logo/s6.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s6','true')
    }
  }
  s7Release(){
    if(this.s7===false&&this.BerserkPoints>=500){
      this.BerserkPoints = this.BerserkPoints-500
      this.s7=true
      this.ssrc7 = "../../assets/logo/s7.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s7','true')
    }
  }
  s8Release(){
    if(this.s8===false&&this.BerserkPoints>=800){
      this.BerserkPoints = this.BerserkPoints-800
      this.s8=true
      this.ssrc8 = "../../assets/logo/s8.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s8','true')
    }
  }
  s9Release(){
    if(this.s9===false&&this.BerserkPoints>=1000){
      this.BerserkPoints = this.BerserkPoints-1000
      this.s9=true
      this.ssrc9 = "../../assets/logo/s9.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s9','true')
    }
  }
  s10Release(){
    if(this.s10===false&&this.BerserkPoints>=1500){
      this.BerserkPoints = this.BerserkPoints-1500
      this.s10=true
      this.ssrc10 = "../../assets/logo/s10.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s10','true')
    }
  }
  s11Release(){
    if(this.s11===false&&this.BerserkPoints>=2000){
      this.BerserkPoints = this.BerserkPoints-2000
      this.s11=true
      this.ssrc11 = "../../assets/logo/s11.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s11','true')
    }
  }
  s12Release(){
    if(this.s12===false&&this.BerserkPoints>=5000){
      this.BerserkPoints = this.BerserkPoints-5000
      this.s12=true
      this.ssrc12 = "../../assets/logo/s12.jpg"
      localStorage.setItem('BerserkPoints',JSON.stringify(this.BerserkPoints))
      localStorage.setItem('s12','true')
    }
  }
}

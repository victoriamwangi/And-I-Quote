import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let nowTime:any = new Date(today.getFullYear(), (today.getMonth())+1, today.getDate());
    alert(nowTime)
    var timeDifference  = Math.abs(value - nowTime);
    var secondCounter =  (timeDifference * 0.001)/ 86400

    if(secondCounter >= 1){
      return secondCounter;
    }else{
      return 0;
    }

  }

}

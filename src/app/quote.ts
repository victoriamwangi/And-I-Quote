export class Quote {
  showName : boolean;
constructor(public id: number, public name: string, public authorName: string, public message: string,public fullDate: Date){
  this.showName = false;
}
}

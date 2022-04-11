export class Quote {
public downVotes: number;
public upVotes: number;
  showName : boolean;
constructor(public id: number, public name: string, public authorName: string, public message: string,public fullDate: Date){
this.showName = false;
this.downVotes =0;
this.upVotes= 0;

}
}

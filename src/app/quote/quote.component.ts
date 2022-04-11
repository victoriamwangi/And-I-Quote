import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
public quote: any;
quotes: Quote[] = [
  new Quote(1,"Vicky", "Steve Jobs", "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.", new Date(2022,4,10), 0),
  new Quote(2, "NJeri", "Thomas A. Edison", "Many of lif’s failures are people who did not realize how close they were to success when they gave up.",new Date(2022,4,9), 0 ),
  new Quote(3, "Morris", "Anonymous", "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",  new Date(2022,4,10), 0)
]

toggleDetails(index: number){
  this.quotes[index].showName = !this.quotes[index].showName;
}
addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  this.quotes.push(quote);


}
deleteQuote(isComplete: any, index: number){
  if(isComplete){
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name} ?`);
    if (toDelete){
      this.quotes.splice(index, 1)

    }
  }

}
// voteIncrement(upVotes: number){
// this.quotes[index].votes += 1;
//   alert("tf");
// };
// voteDecrement(votes: number){
//   return votes--;
// }

arr: number[] = this.quotes.map(quote =>quote.votes)
highest = Math.max(...this.arr);


  constructor() { }


  ngOnInit(): void {
  }

}

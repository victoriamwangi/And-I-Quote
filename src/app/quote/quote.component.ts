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
  new Quote(1,"Vicky", "Steve Jobs", "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."),
  new Quote(2, "NJeri", "Thomas A. Edison", "Many of lif’s failures are people who did not realize how close they were to success when they gave up." ),
  new Quote(3, "Morris", "Anonymous", "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.")
]

toggleDetails(index: any){
  this.quotes[index].showName = !this.quotes[index].showName;
}
  constructor() { }

  ngOnInit(): void {
  }

}

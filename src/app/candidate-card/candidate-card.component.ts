import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

  @Input() candidateList: any;
  @Input() type: String;

  constructor() { }

  ngOnInit(): void {
    console.log(this.candidateList);
    console.log(this.type);
    
  }

}

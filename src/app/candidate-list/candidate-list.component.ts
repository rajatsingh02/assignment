import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  prospects = [
    {
      image: '../../assets/avatar1.svg',
      name: 'Kunjan Kumar',
      designation: 'Director, Hosuing and Development',
      location: 'New Delhi',
      status: 'Awaiting Feedback',
      leads: 7,
      captured: 3,
      comments: 'Lorem ri culpa itaque voluptatibus autem ex quam. Possimus quae sed iure ad. At vel ratione officiis optio natus dolorum illo nobis distinctio?',
      date: '1 Jul 2020'
    },
    {
      image: '../../assets/avatar2.png',
      name: 'Kunjan Kumar',
      designation: 'Director, Hosuing and Development',
      location: 'New Delhi',
      status: 'Awaiting Feedback',
      leads: 7,
      captured: 3,
      comments: 'Lorem ri culpa itaque voluptatibus autem ex quam. Possimus quae sed iure ad. At vel ratione officiis optio natus dolorum illo nobis distinctio?',
      date: '1 Jul 2020'
    },
    {
      image: '../../assets/avatar1.svg',
      name: 'Kunjan Kumar',
      designation: 'Director, Hosuing and Development',
      location: 'New Delhi',
      status: 'Awaiting Feedback',
      leads: 7,
      captured: 3,
      comments: 'Lorem ri culpa itaque voluptatibus autem ex quam. Possimus quae sed iure ad. At vel ratione officiis optio natus dolorum illo nobis distinctio?',
      date: '1 Jul 2020'
    },
  ];

  dropped = [
    {
      image: '../../assets/avatar2.png',
      name: 'Kunjan Kumar',
      designation: 'Director, Hosuing and Development',
      location: 'New Delhi',
      status: 'Awaiting Feedback',
      leads: 2,
      captured: 4,
      comments: 'Lorem ri culpa itaque voluptatibus autem ex quam. Possimus quae sed iure ad. At vel ratione officiis optio natus dolorum illo nobis distinctio?',
      date: '1 Jul 2020'
    }
  ];

  offerExtendedList = [
    {
      image: '../../assets/avatar2.png',
      name: 'Kunjan Kumar',
      designation: 'Director, Hosuing and Development',
      location: 'New Delhi',
      status: 'Awaiting Feedback',
      leads: 2,
      captured: 4,
      comments: 'Lorem ri culpa itaque voluptatibus autem ex quam. Possimus quae sed iure ad. At vel ratione officiis optio natus dolorum illo nobis distinctio?',
      date: '1 Jul 2020'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

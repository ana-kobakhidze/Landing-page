import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionData = [
    {
      question: "What's the concept behind Scrambly?",
      answer:
        "We've built Scrambly to help ordinary people earn and save money in an easy way by checking out free products of brands that are willing to pay for it.",
    },
    {
      question: 'How do I make money?',
      answer:
        'By performing simple tasks such as installing apps, playing gaming and leting surveys.',
    },
    {
      question: 'How do I save money?',
      answer:
        'Pick the best cashback offers on Scrambly, use them to shop online and get your cashback directly from us.',
    },
    {
      question: 'How much money can I make here?',
      answer:
        'It can become a real side-hustle and you can make from $50 to whopping $1000+ monthly.',
    },
    {
      question: 'How long does it take to cash out?',
      answer: 'Our cash outs are instant.',
    },
  ];
  expandedIndex = 0;

  constructor() {}

  ngOnInit(): void {}
}

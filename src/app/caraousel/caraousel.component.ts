import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css'],
  animations: [
    trigger('fade', [
      transition('void => active', [
        // using status here for transition
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class CaraouselComponent implements OnInit, AfterViewInit {
  itemClassName = 'carousel__photo';
  items;
  totalItems;
  slide = 0;
  moving = true;
  startingSlide = 0;
  endingSlide = 2;
  slides = [
    {
      label: 'First',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item initial',
      isVisible: true,
      data: '1',
    },
    {
      label: 'Second',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item',
      isVisible: true,
      data: '2',
    },
    {
      label: 'Third',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item',
      isVisible: true,
      data: '3',
    },
    {
      label: 'Fourth',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item',
      isVisible: false,
      data: '4',
    },
    {
      label: 'Fifth',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item',
      isVisible: false,
      data: '5',
    },
    {
      label: 'Sixth',
      path: 'https://picsum.photos/200/300',
      class: 'caraousel-item',
      isVisible: false,
      data: '6',
    },
  ];
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {
    console.log(this._document.querySelectorAll('.carousel').length);
    this.totalItems = this.slides.length;
  }

  move() {
    this.slides.forEach((slide, ind) => {
      slide.isVisible = false;
    });
    this.slides[0].isVisible = true;
    this.slides[1].isVisible = true;
    this.slides[2].isVisible = true;
  }
  moveNext() {
    let tempSlide = this.slides.shift();
    this.slides.push(tempSlide);
    this.move();
  }

  movePrev() {
    let tempSlide = this.slides.pop();
    this.slides.unshift(tempSlide);
    this.move();
  }

  ngOnInit() {}
  ngAfterViewInit(): void {}
}

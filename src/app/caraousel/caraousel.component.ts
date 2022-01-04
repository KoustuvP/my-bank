import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css'],
})
export class CaraouselComponent implements OnInit, AfterViewInit {
  itemClassName = 'carousel__photo';
  items;
  totalItems;
  slide = 0;
  moving = true;
  slides = [
    {
      label: 'First',
      path: 'https://picsum.photos/200/300',
      class: 'carousel__photo initial active',
    },
    {
      label: 'Second',
      path: 'https://picsum.photos/200/301',
      class: 'carousel__photo prev',
    },
    {
      label: 'Third',
      path: 'https://picsum.photos/200/302',
      class: 'carousel__photo next',
    },
    {
      label: 'Fourth',
      path: 'https://picsum.photos/200/303',
      class: 'carousel__photo',
    },
    {
      label: 'Fifth',
      path: 'https://picsum.photos/200/304',
      class: 'carousel__photo',
    },
    {
      label: 'Sixth',
      path: 'https://picsum.photos/200/305',
      class: 'carousel__photo',
    },
  ];
  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) {
    console.log(this._document.querySelectorAll('.carousel').length);
    this.totalItems = this.slides.length;
  }

  moveNext() {
    if (this.slide === this.totalItems - 1) {
      this.slide = 0;
    } else {
      this.slide++;
    }
    this.moveCarouselTo(this.slide);
  }

  movePrev() {
    if (this.slide === 0) {
      this.slide = this.totalItems - 1;
    } else {
      this.slide--;
    }
    this.moveCarouselTo(this.slide);
  }

  moveCarouselTo(slide) {
    let newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;
    if (this.totalItems - 1 > 3) {
      if (newPrevious <= 0) {
        oldPrevious = this.totalItems - 1;
      } else if (newNext >= this.totalItems - 1) {
        oldNext = 0;
      }
      if (slide === 0) {
        newPrevious = this.totalItems - 1;
        oldPrevious = this.totalItems - 2;
        oldNext = slide + 1;
      } else if (slide === this.totalItems - 1) {
        newPrevious = slide - 1;
        newNext = 0;
        oldNext = 1;
      }
      this.slides[oldPrevious].class = this.itemClassName;
      this.slides[oldNext].class = this.itemClassName;
      this.slides[newPrevious].class = this.itemClassName + ' prev';
      this.slides[slide].class = this.itemClassName + ' active';
      this.slides[newNext].class = this.itemClassName + ' next';
    }
  }

  ngOnInit() {}
  ngAfterViewInit(): void {}
}

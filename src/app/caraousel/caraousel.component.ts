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
    // trigger('fade', [
    //   transition('void => active', [
    //     // using status here for transition
    //     style({ opacity: 0 }),
    //     animate(1000, style({ opacity: 1 })),
    //   ]),
    //   transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    // ]),
    trigger('fade', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(600)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
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
    // if (this.endingSlide == this.slides.length - 1) this.endingSlide = 0;
    // else {
    //   this.startingSlide += 1;
    //   this.endingSlide += 1;
    // }

    // this.slides.forEach((slide, ind) => {
    //   if (ind >= this.startingSlide && ind <= this.endingSlide) {
    //     slide.isVisible = true;
    //   } else slide.isVisible = false;
    // });

    let tempSlide = this.slides.shift();
    this.slides.push(tempSlide);
    // let tempSlides=this.slides.map((slide)=>slide);
    // this.slides=tempSlides
    this.slides.forEach((slide, ind) => {
      slide.isVisible = false;
    });
    setTimeout(() => {
      this.slides[0].isVisible = true;
      this.slides[1].isVisible = true;
      this.slides[2].isVisible = true;
    }, 100);
  }

  setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    // this.itemClassName = 'carousel__photo';
    // this.totalItems = this.items.length;
    // this.items[this.totalItems - 1].classList.add('prev');
    // this.items[0].classList.add('active');
    // this.items[1].classList.add('next');
  }
  // Set event listeners
  setEventListeners() {
    // var next = document.getElementsByClassName('carousel__button--next')[0],
    //   prev = document.getElementsByClassName('carousel__button--prev')[0];
    // next.addEventListener('click', this.moveNext);
    // prev.addEventListener('click', this.movePrev);
  }

  moveNext() {
    // Check if moving
    if (!this.moving) {
      // If it's the last slide, reset to 0, else +1
      if (this.slide === this.totalItems - 1) {
        this.slide = 0;
      } else {
        this.slide++;
      }
      // Move carousel to updated slide
      this.moveCarouselTo(this.slide);
    }
  }

  movePrev() {
    // Check if moving
    if (!this.moving) {
      // If it's the first slide, set as the last slide, else -1
      if (this.slide === 0) {
        this.slide = this.totalItems - 1;
      } else {
        this.slide--;
      }

      // Move carousel to updated slide
      this.moveCarouselTo(this.slide);
    }
  }

  disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    this.moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function () {
      this.moving = false;
    }, 500);
  }

  moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!this.moving) {
      // temporarily disable interactivity
      // this.disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
      // Test if carousel has more than three items
      if (this.totalItems - 1 > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = this.totalItems - 1;
        } else if (newNext >= this.totalItems - 1) {
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = this.totalItems - 1;
          oldPrevious = this.totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === this.totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        this.items[oldPrevious].className = this.itemClassName;
        this.items[oldNext].className = this.itemClassName;
        // Add new classes
        this.items[newPrevious].className = this.itemClassName + ' prev';
        this.items[slide].className = this.itemClassName + ' active';
        this.items[newNext].className = this.itemClassName + ' next';
      }
    }
  }

  initCarousel() {
    //this.setInitialClasses();
    this.setEventListeners();
    // Set moving to false so that the carousel becomes interactive
    this.moving = false;
  }

  ngOnInit() {}
  ngAfterViewInit(): void {
    // this.items =
    //   this.elementRef.nativeElement.querySelectorAll('.carousel__photo');
    // this.totalItems = this.items.length;
    // this.items[this.totalItems - 1].classList.add('prev');
    // this.items[0].classList.add('active');
    // this.items[1].classList.add('next');
    // this.initCarousel();
  }
}

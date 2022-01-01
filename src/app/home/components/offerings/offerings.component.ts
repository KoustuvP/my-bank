import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css'],
})
export class OfferingsComponent implements OnInit {
//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['Previous', 'Next'],
//     // responsive: {
//     //   0: {
//     //     items: 1,
//     //   },
//     //   400: {
//     //     items: 2,
//     //   },
//     //   740: {
//     //     items: 3,
//     //   },
//     //   940: {
//     //     items: 4,
//     //   },
//     // },
//     nav: true,
//   }; 
//  slidesStore = [
//     {
//       id:1,
//       src:'https://i.picsum.photos/id/976/400/250.jpg',
//       alt:'Image_1',
//       title:'Image_1'
//     },
//     {
//       id:2,
//       src:'https://i.picsum.photos/id/996/400/250.jpg',
//       alt:'Image_2',
//       title:'Image_3'
//     },
//     {
//       id:3,
//       src:'https://i.picsum.photos/id/400/400/250.jpg',
//       alt:'Image_3',
//       title:'Image_3'
//     },
//     {
//       id:4,
//       src:'https://i.picsum.photos/id/316/400/250.jpg',
//       alt:'Image_4',
//       title:'Image_4'
//     },
//     {
//       id:5,
//       src:'https://i.picsum.photos/id/705/400/250.jpg',
//       alt:'Image_5',
//       title:'Image_5'
//     }
//   ]

title = "CodeSandbox";
  log = console.log;
  images = [
    {
      label: "First",
      path: "https://picsum.photos/200/300"
    },
    {
      label: "Second",
      path: "https://picsum.photos/200/300"
    },
    {
      label: "Third",
      path: "https://picsum.photos/200/300"
    },
    {
      label: "Fourth",
      path: "https://picsum.photos/200/300"
    },
    {
      label: "Fifth",
      path: "https://picsum.photos/200/300"
    },
    {
      label: "Sixth",
      path: "https://picsum.photos/200/300"
    }
  ];

  constructor() {}

  ngOnInit() {}
}

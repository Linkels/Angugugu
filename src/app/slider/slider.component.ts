import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './slider.component.html'})
export class NgbdCarouselBasic {
  images = [1, 2, 3].map(() => `https://picsum.photos/1900/500?random&t=${Math.random}`);
}

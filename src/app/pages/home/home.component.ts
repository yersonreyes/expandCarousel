import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  slidesStore = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 1,
      src: 'https://images.pexels.com/photos/247807/pexels-photo-247807.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 1,
      src: 'https://images.pexels.com/photos/4127016/pexels-photo-4127016.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2653726/pexels-photo-2653726.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
    },


  ]

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleFullscreen() {
    const docEl:any = this.document.documentElement;
  
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { /* Firefox */
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { /* IE/Edge */
      docEl.msRequestFullscreen();
    }
  }
}

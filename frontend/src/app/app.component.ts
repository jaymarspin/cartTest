import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import Swal from 'sweetalert2';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  private _album = new Array<any>()
  product = new Array<any>();
  constructor(public cartSrvc: CartService, private _lightbox: Lightbox) {
    this.product.push({
      name: 'shoe1',
      price: '500',
      imgsrc: 'https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/23/79/359445_24435_XXL.jpg'
    })
    this.product.push({
      name: 'shoe2',
      price: '500',
      imgsrc: 'https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-asics-us-Library/default/dweb010f38/firstspirit/media/blog_article_images_22521/asics_blog_hero_desktop_runningvstraining_022521.jpg'
    })
    this.product.push({
      name: 'shoe3',
      price: '500',
      imgsrc: 'https://media.glamour.com/photos/62f582614e21956f282475ed/2:1/w_3500,h_1750,c_limit/best%20workout%20shoes%20for%20women.jpg'
    })
    this.product.push({
      name: 'shoe4',
      price: '500',
      imgsrc: 'https://cdn.thewirecutter.com/wp-content/media/2021/06/watershoes-2048px-5472-nocap.jpg'
    })
    this.product.push({
      name: 'shoe4',
      price: '500',
      imgsrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'
    })
    this.product.push({
      name: 'shoe4',
      price: '500',
      imgsrc: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/slow-man-shoes.jpg?quality=82&strip=1'
    })
  }


  added(index) {

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Added to cart',
      showConfirmButton: false,
      timer: 1500
    })


    this.cartSrvc.cartCount += 1;

  }

  open(src): void {
    this._album = new Array<any>()
    this._album.push({
      src: src,
      caption: '',
      thumb: ''
    })
    this._lightbox.open(this._album, 0);
  }
}

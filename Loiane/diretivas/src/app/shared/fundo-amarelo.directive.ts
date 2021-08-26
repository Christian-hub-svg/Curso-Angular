import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Se eu quiser que seja aplicada a apenas um elemento,
  // coloque apenas a tag antes.
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = "yellow";
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

}


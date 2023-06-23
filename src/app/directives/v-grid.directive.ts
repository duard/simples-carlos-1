import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[v-grid]',
})
export class VGridDirective implements OnInit {
  @HostBinding('style.grid-template-columns')
  @Input()
  columns: string | undefined;
  @HostBinding('style.grid-template-rows')
  @Input()
  rows: string | undefined;
  @HostBinding('style.grid-template-areas')
  @Input()
  areas: string | undefined;
  // @Input() movableObject: string = 'Goiabada';
  @HostBinding('style.grid-template-areas')
  @Input()
  movableObject: string | undefined;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {
    console.log(this.movableObject);

    this.renderer.setStyle(this.el.nativeElement, 'display', 'grid');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
  }

  ngOnInit() {
    this.areas = 'header';
    console.log('areas  : ', this.areas);
  }
}

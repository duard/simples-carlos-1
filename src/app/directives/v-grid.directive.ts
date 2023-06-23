import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[v-grid]',
})
export class VGridDirective {
  @HostBinding('style.grid-template-columns')
  @Input()
  columns: string | undefined;
  @HostBinding('style.grid-template-rows')
  @Input()
  rows: string | undefined;
  @HostBinding('style.grid-template-areas')
  @Input()
  areas: string | undefined;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'grid');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
  }
}

@Directive({
  selector: '[v-grid-area]',
})
export class GridAreaDirective {
  @HostBinding('style.grid-area')
  @Input('v-grid-area')
  area: string | undefined;
}

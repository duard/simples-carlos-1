import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[input-box]',
})
export class TestDirective implements OnInit {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  @Input() name!: string;
  @Input() value!: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    console.log('input-box keys  : ', this.name, this.value);

    this.host.nativeElement.style.setProperty(`--${this.name}`, this.value);
    // this.renderer.setStyle(this.hostEl, 'display', 'block');

    // this.renderer.setStyle(this.hostEl, 'border', `1px solid black`);
    // this.renderer.setStyle(this.hostEl, 'padding', '8px');
    this.renderer.setStyle(this.hostEl, this.name, this.value);
  }
}

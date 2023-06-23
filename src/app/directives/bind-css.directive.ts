import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bindCss]',
})
export class BindCssDirective {
  @Input() variableValue = '';
  @Input() variableName = '';

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit(changes: any) {
    this.host.nativeElement.style.setProperty(
      `--${this.variableName}`,
      this.variableValue
    );
  }
}

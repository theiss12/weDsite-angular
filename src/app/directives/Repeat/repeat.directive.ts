import { TemplateRef, ViewContainerRef, Directive, Input } from "@angular/core";

@Directive({
   selector: '[mgRepeat]',
   standalone: true
})
export class mgRepeatDirective {
   constructor(
       private _template: TemplateRef<any>,
       private _viewContainer: ViewContainerRef
   ) { }

   @Input('mgRepeat')
   set times(times: number) {
       for (let i = 0; i < times; ++i)
           this._viewContainer.createEmbeddedView(this._template);
   }
}
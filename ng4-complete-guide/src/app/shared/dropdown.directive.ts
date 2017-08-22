import {Directive, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;

  method(){
   let tex: string;

  }
  @HostListener('click') toggleOpen(){
    debugger;
    this.isOpen = !this.isOpen;

  }
}

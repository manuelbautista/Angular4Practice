import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')  element: {type:string ,name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor(private _compiler: Compiler) {
    console.log('Constructor Called!');
    this._compiler.clearCache();
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called!');
    console.log(changes);
}
  ngDoCheck(){
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Called!');
  }
  //
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!');
  }
  ngAfterViewInit(): void {

    console.log('ngAfterViewInit Called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!');
  }
}

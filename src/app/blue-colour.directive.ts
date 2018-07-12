import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColoured]'
})
export class BlueColourDirective {

  constructor(element: ElementRef) {
  	element.nativeElement.style.color = "red" ;
  }
/*
  @HostListener ('click') doSomething(){
  	alert('It works!');
  }

  @HostListener ('target:EVENT', [args]){
	-----------------
  }
  */

  @HostListener('document:click',['$event'])
  	elemClicked(elem){
  		console.log('clicked',elem);
  	}
  


}

import { DOCUMENT } from '@angular/common';
import { Directive,ElementRef,HostListener,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color:string = 'white'
  
  constructor(private element:ElementRef,private renderer:Renderer2) { 
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
      // this.element.nativeElement.style.backgroundColor = this.color;
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color)   
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','LightGray')
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color)
  }
}


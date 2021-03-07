import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // output: because passing out of the component 
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // this is event you can listining do from out side 
  // newServerName = '';
  // newServerContent = '';
 @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef; // to pass local refernce to out of compnent

  //@ContentChild('serverContentInput', {static: false}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = "Somyhing" // can chnge value 
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = "Somyhing"
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}

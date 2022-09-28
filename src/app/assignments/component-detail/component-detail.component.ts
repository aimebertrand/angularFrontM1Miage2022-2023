import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  @Input() assignmentTransmis?:Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor() { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    this.assignmentTransmis!.rendu = true;
  }

  onDeleteAssignment() {
    this.deleteAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = undefined;
  }


}

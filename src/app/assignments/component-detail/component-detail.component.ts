import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  @Input() assignmentTransmis?:Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    /*this.assignmentService
      .getAssignments()
      .subscribe(assignments => this.assignments = assignments);*/

    this.assignmentService.updateAssignment(this.assignmentTransmis!).subscribe(message => console.log(message))

     this.assignmentTransmis!.rendu = true;
  }

  onDeleteAssignment() {
    this.deleteAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = undefined;
  }


}

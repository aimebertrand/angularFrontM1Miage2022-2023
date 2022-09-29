import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

 /* @Input() */assignmentTransmis?:Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentService: AssignmentsService, private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  onAssignmentRendu() {
    /*this.assignmentService
      .getAssignments()
      .subscribe(assignments => this.assignments = assignments);*/

    this.assignmentService.updateAssignment(this.assignmentTransmis!).subscribe(message => console.log(message))

     this.assignmentTransmis!.rendu = true;

    this.router.navigate(['/home']);
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }

  onDeleteAssignment() {
this.assignmentService.deleteAssignment(this.assignmentTransmis!).subscribe(message => console.log(message))
    this.assignmentTransmis = undefined;
    this.router.navigate(['/home']);
    /*    this.deleteAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = undefined;*/
  }


}

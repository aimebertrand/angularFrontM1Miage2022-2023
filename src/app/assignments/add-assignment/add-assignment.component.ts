import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomDevoir: string = '';
  dateDeRendu?:Date;

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit() {
    const newAssignment: Assignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    this.nouvelAssignment.emit(newAssignment);
    // this.assignments.push(newAssignment);

  }
  assignmentClique(assignment:Assignment) {
  /*  this.assignmentSelectionne = assignment;
    console.log("assignment clique = " + assignment.nom);*/
  }

}

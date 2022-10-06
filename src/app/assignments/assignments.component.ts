import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import {AssignmentsService} from "../shared/assignments.service";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})


export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments :';
  //ajoutActive = false;
  nomDevoir: string = '';

  assignmentSelectionne?:Assignment;
  formVisible = false;

  assignments !: Assignment[];

  constructor(private assignmentService: AssignmentsService) { }

/*  constructor() {}*/

  ngOnInit(): void {
  this.getAssignments();
  }

  getAssignments() {
    this.assignmentService
      .getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }



  getAssignmentColor(a: any) {
    return a.rendu ? 'green' : 'red';
  }

/*  onSubmit() {
    console.log(this.nomDevoir);
  }*/

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
    console.log("assignment clique = " + assignment.nom);
  }

  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }

  onNouvelAssignment(assignment:Assignment) {
  /*  // assignment envoyé par le composant add-assignment
    this.assignments.push(assignment);
    // on cache le formulaire et on affiche la liste
    this.formVisible = false;*/
    this.assignmentService
      .addAssignment(assignment)
      .subscribe(
        message=> console.log(message
        ));
    this.formVisible =  false;
  }

  onDeletedAssignment(assignmentdel:Assignment) {
  for (const assignment of this.assignments) {
    if (assignment.nom === assignmentdel.nom) {
      this.assignments.splice(this.assignments.indexOf(assignment), 1);
      console.log("assignment supprime = " + assignment.nom);
    }
  }
  }
}

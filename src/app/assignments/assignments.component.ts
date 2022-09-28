import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

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

  assignments:Assignment[] = [
    {
      nom: 'Devoir Langage C++',
      dateDeRendu: new Date('2020-11-15'),
      rendu: false,
    },
    {
      nom: 'Devoir lanagage Scala',
      dateDeRendu: new Date('2021-12-18'),
      rendu: false,
    },
    {
      nom: 'Devoir Haskell',
      dateDeRendu: new Date('2022-10-20'),
      rendu: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // appelé juste avant l'affichage
    /*
    setTimeout(() => {
      this.ajoutActive = true;
    }, 3000);
    */
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
    this.formVisible = true;
  }

  onNouvelAssignment(assignment:Assignment) {
    // assignment envoyé par le composant add-assignment
    this.assignments.push(assignment);

    // on cache le formulaire et on affiche la liste
    this.formVisible = false;
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

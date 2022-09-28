import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
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

  constructor() {
  }

  getAssignments(): Assignment[] {
    return this.assignments;
  }
}

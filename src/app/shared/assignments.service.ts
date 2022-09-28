import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import {Observable, observable, of} from "rxjs";

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

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment ajouté");
  }

  updateAssignment(assignment: Assignment) : Observable<string> {
    assignment.rendu = true;
    return of("Assignment")
  }
}

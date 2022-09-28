import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import {Observable, observable, of} from "rxjs";
import {LoggingService} from './logging.service';

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


  constructor(private loggingService: LoggingService) {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.push(assignment);
    /*this.loggingService.log(assignment.nom!, "ajouté")*/
    return of("Assignment ajouté");
  }

  updateAssignment(assignment: Assignment) : Observable<string> {

    return of("Assignment")
  }

  //JE N'AI PAS UTILISÉ CETTE MÉTHODE ||||| À MODIFIER
  deleteAssignment(assignment: Assignment) : Observable<string> {
    this.assignments = this.assignments.filter(a => a !== assignment);
    return of("Assignment supprimé");
  }
}

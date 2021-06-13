import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})

export class PersonReadComponent implements OnInit {

  people!: Person[]
  displayedColumns = ['id', 'name', 'email', 'phone', 'birth_at', 'action']

  constructor(private  personService: PersonService) { }

  ngOnInit(): void {
    this.personService.read().subscribe(people => {
      this.people = people
      console.log(people)
    })
  }

}

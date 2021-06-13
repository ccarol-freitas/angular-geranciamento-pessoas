import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/components/person/person.model';
import { PersonService } from 'src/app/components/person/person.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people!: Person[]
  displayedColumns = ['name']

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.read().subscribe(people => {
      this.people = people
      console.log(people)
    })
  }

}

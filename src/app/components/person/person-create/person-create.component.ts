import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  person: Person = {
    name: '',
    email: '',
    phone: '',
    birth_at: '',
  }

  constructor(private personService: PersonService, private router: Router) {

  }



  ngOnInit(): void {

  }


  createPerson(): void {

    this.personService.create(this.person).subscribe(() => {
      this.personService.showMessage('Pessoa cadastrada com sucesso!')
      this.router.navigate(['/people'])
    })
  }

  cancel(): void {
    this.router.navigate(['/people'])
  }
}



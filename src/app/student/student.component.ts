import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  /**
   * FormBuilder gives us methods to manage formControl, formArray, and formGroup, nothing much
   */
  studentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    /**
     * <form [formGroup]="studentFormGroup">
        <input type="text" formControlName="name">
        <input type="text" formControlName="age">
        <input type="text" formControlName="sex">
      </form>
     *
    */

    // this.studentFormGroup = this.formBuilder.group({
    //   name: '',
    //   age: '',
    //   sex: '',
    //   subjects: []
    // });

    // OR

    // this.studentFormGroup = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   age: ['', Validators.required],
    //   sex: ['', Validators.required],
    //   subjects: []
    // });

    // OR

    this.studentFormGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      subjects: this.formBuilder.array([])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("controls: ", this.studentFormGroup.controls);
    console.log("get: ", this.studentFormGroup.get('name'));

    /**
     * If you have errors in name field then it would have {required: true}
     * else null
     */
    console.log("get: ", this.studentFormGroup.get('name').errors);

    // Apply this to [disabled] type=submit
    console.log("is valid: ", this.studentFormGroup.valid);

  }

  addSubject(subjectName: string) {

    let students = this.studentFormGroup.get('subjects') as FormArray;
    students.push(new FormControl(subjectName, Validators.required));
  }

  saveOrDelete(subjectName: string, index: number) {

    if(subjectName && (subjectName+'').trim().length > 0) {

    } else {
      let students = this.studentFormGroup.get('subjects') as FormArray;
      students.removeAt(index);
    }
  }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Pune", "Nagpur", "Jaipur", "Mumbai", "Thane"];

  employeeArray: any[] = [
    {empId:111, name:'AAAA', city:'Pune', contactNo:'9898989899'},
    {empId:222, name:'BBBB', city:'Mumbai', contactNo:'9898989899'},
    {empId:333, name:'CCCC', city:'Wai', contactNo:'9898989899'},
    {empId:444, name:'DDDD', city:'Bengaluru', contactNo:'9898989899'},
    {empId:555, name:'EEEE', city:'Hyderabad', contactNo:'9898989899'},
  ]
}

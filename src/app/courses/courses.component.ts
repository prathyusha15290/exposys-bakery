import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses=[
    {'coursename':'Nodejs','type':'backend','information':" It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",'image':'../../assets/nodejs.png'},
    {'coursename':'bootstrap','type':'frontend','information':" Bootstrap; with new components, faster stylesheet and more responsiveness",'image':'../../assets/bootstrap.png'},
    {'coursename':'Angular','type':'frontend','information':"Angular helps build interactive and dynamic single page applications (SPAs) with its compelling features including templating",'image':'../../assets/angular.svg'},
    {'coursename':'Html and css','type':'frontend','information':"HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs,",'image':'../../assets/html.png'},
    {'coursename':'python','type':'competitive','information':"Python is a general-purpose programming language, so it can be used for many things. Python is used for web development, ",'image':'../../assets/python.png'},
    {'coursename':'java','type':'competitive','information':"Java works great within corporate environments, or if you're building a very large scale system.",'image':'../../assets/java.png'},
    {'coursename':'sql','type':'backend','information':"A query language is a kind of programming language that's designed to facilitate retrieving specific information from databases",'image':'../../assets/sql.png'},
    {'coursename':'react','type':'frontend','information':"js/React is an open-source frontend framework that is based on JavaScript, developed by Facebook, and best known for its virtual DOM feature.",'image':'../../assets/react.png'},

  ]

}

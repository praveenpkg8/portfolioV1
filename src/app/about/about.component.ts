import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  data: {
    about: any;
  };
  education: object;
  async getAboutDetials(){
    let response = await fetch("/assets/jsons/about.json");
    let data = await response.json()
    console.log(data)
    return data
  }

  async ngOnInit() {
    this.data = await this.getAboutDetials();
    this.education = this.data.about.Education;
    console.log(this.education)
  }

}

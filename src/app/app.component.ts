import { Component, OnInit } from '@angular/core';
import { COCOMODict, ProjectData, ResultData } from 'src/cfg/predef-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kloc: number = 55;

  ngOnInit(): void {
    this.calculate();
  }
  
  currData: { [key: string ]: ResultData } = {
    'organic' : { effort: 0, duration: 0, personnel:0, p: 0 },
    'semi detached': { effort: 0, duration: 0, personnel:0, p: 0 },
    'embedded': { effort: 0, duration: 0, personnel:0, p: 0 },
  }

  calcE(type: string): number {
    var proj = this.getProjectDataByType(type);
    this.currData[type].effort = proj.paramA * (this.kloc ** (proj.paramB));
    return this.currData[type].effort;
  }

  calcT(type: string): number {
    var proj = this.getProjectDataByType(type);
    this.currData[type].duration = proj.paramC * (this.calcE(type) ** proj.paramD);
    return this.currData[type].duration;
  }

  calcS(type: string): number {
    this.currData[type].personnel = this.calcE(type) / this.calcT(type);;
    return this.currData[type].personnel;
  }

  calcP(type: string): number {
    this.currData[type].p = this.kloc / this.calcE(type);
    return this.currData[type].p
  }

  private getProjectDataByType(type: string): ProjectData {
    return COCOMODict[type];
  }

  calculate() {
    const projectTypes = ['organic', 'semi detached', 'embedded'];
    for (const type of projectTypes) {
      this.calcE(type);
      this.calcT(type);
      this.calcS(type);
      this.calcP(type);
    }
  }
}

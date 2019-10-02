import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet,Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartOption: ChartOptions = {
    responsive: true,
  };
  public pieChartOptio: ChartOptions = {
    responsive: true,
  };


 constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit() {
  }
  public pieChartLabels: Label[] = [['chome','os'],['firfox'], [ 'Opera'], ['mosila ']];
  public pieChartData: SingleDataSet = [300,200,500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartLabel: Label[] = [['Linux','os'],['Window','c'], [ 'Mac','Os'], ['Chrome']];
  public pieChartDat: SingleDataSet = [300,100,300, 250];
  public pieChartTyp: ChartType = 'pie';
  public pieChartLegen= true;
  public pieChartPlugin = [];

  public pieChartLabe: Label[] = [['india'],['pakistan'], [ 'Afganistan'], ['bhutan ']];
  public pieChartDa: SingleDataSet = [300,250,200, 150];
  public pieChartTy: ChartType = 'pie';
  public pieChartLege = true;
  public pieChartPlugi = [];

  
}

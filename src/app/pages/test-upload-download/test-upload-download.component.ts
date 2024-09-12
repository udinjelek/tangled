import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexTitleSubtitle
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-test-upload-download',
  standalone: true,
  imports: [NgApexchartsModule],  // Import the module here
  templateUrl: './test-upload-download.component.html',
  styleUrls: ['./test-upload-download.component.scss']
})
export class TestUploadDownloadComponent {
  public chartOptions: ChartOptions = {
    series: [44, 55, 13, 43, 22],  // Initialize with a non-empty series
    chart: {
      type: 'donut',
      width: '100%'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    title: {
      text: 'Simple Donut Chart'
    }
  };
}

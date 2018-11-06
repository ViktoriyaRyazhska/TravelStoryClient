import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../table/feature-table/activity.service';
import {ActivityCard} from '../../table/feature-table/activityCard';

declare const Chart;

@Component({
  selector: 'cdk-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: ['./share-price.component.scss']
})
export class SharePriceComponent implements OnInit {
  activityCard: ActivityCard;

  public data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'My First dataset',
      fillColor: 'rgba(255, 255, 255, 1)',
      strokeColor: 'rgba(255, 255, 255, 1)',
      pointColor: 'rgba(255, 255, 255, 1)',
      pointStrokeColor: 'rgba(255, 255, 255, 1)',
      pointHighlightFill: 'rgba(255, 255, 255, 1)',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [41, 29, 53, 27, 53, 53, 92, 106, 66, 44, 40, 79]
    }]
  };

  public options = {
    elements: {},
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          fontColor: 'white',
          fontSize: 18,
          stepSize: 1,
          beginAtZero: true
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          fontColor: 'white',
          fontSize: 18,
          stepSize: 1,
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    plugins: {
      filler: {
        propagate: false
      }
    },
    title: {
      display: true,
      text: 'TravelStory creating month statistic',
      fontColor: 'white',
      fontSize: 18
    }
  };

  constructor(private service: ActivityService) {
  }

  getActivity(): void {
    this.service.getActivity()
      .subscribe(data => {
        this.activityCard = data;
        this.drawGraph();
      });
  }

  ngOnInit() {
    this.getActivity();
    setTimeout(() => {
      this.drawGraph();
    }, 500);
  }

  drawGraph() {
    const graph = new Chart('share-price', {
      type: 'line',
      data: this.data,
      options: this.options
    });
  }

}

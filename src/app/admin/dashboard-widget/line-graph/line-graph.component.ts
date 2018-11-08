import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {ActivityCard} from '../../table/feature-table/activityCard';
import {ActivityService} from '../../table/feature-table/activity.service';

@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
  activityCard: ActivityCard;

  constructor(private service: ActivityService) {
  }

  getActivity(): void {
    this.service.getActivity()
      .subscribe(data => {
        this.activityCard = data;
        this.createLineChart();
      });
  }

  ngOnInit() {
    this.getActivity();
  }

  createLineChart() {
    new Chart('line-graph', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          'backgroundColor': 'rgba(92, 107, 192, 0.36)',
          'borderColor': 'rgba(92, 107, 192,.5)',
          'data': this.activityCard.users,
          'label': 'Dataset',
          'fill': 'start'
        }]
      },
      options: {
        elements: {
          line: {
            tension: 0.000001
          }
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
          text: 'REGISTRATION GRAPH '
        }
      }
    });
  }

}

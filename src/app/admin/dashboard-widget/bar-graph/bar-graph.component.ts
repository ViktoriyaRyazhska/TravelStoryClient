import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {ActivityService} from '../../table/feature-table/activity.service';
import {ActivityCard} from '../../table/feature-table/activityCard';

@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  activityCard: ActivityCard;

  constructor(private service: ActivityService) {
  }

  getActivity(): void {
    this.service.getActivity()
      .subscribe(data => {
        this.activityCard = data;
        this.createBarGraph();
        console.log(this.activityCard.likes);
      });
  }

  ngOnInit() {
    this.getActivity();
  }

  createBarGraph() {
    new Chart('dash-bar-graph', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: 'rgba(92, 107, 192, .7)',
            borderColor: 'rgba(92, 107, 192, .7)',
            data: JSON.parse(this.activityCard.likes),
            label: 'Likes',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(66, 165, 245, .7)',
            borderColor: 'rgba(69, 39, 160, .7)',
            data: JSON.parse(this.activityCard.comments),
            label: 'Comments',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(38, 166, 154, .7)',
            borderColor: 'rgba(69, 39, 160, .7)',
            data: JSON.parse(this.activityCard.travelStories),
            label: 'TravelStories',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(102, 187, 106, .7)',
            borderColor: 'rgba(255, 99, 132)',
            data: JSON.parse(this.activityCard.users),
            label: 'Users',
            fill: 'false'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        elements: {
          line: {
            tension: 0.000001
          }
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: 'ACTIVITY GRAPH'
        }
      }
    });
  }
}

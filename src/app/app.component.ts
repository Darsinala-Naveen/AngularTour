import { Component, OnInit } from '@angular/core';
import { TourService } from 'ngx-tour-core';
import { IStepOption, TourMatMenuModule } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public tourService: TourService
  ){  }

  ngOnInit() {
    const steps: IStepOption[] = [
      {
        stepId: 'step1',
        anchorId: 'step1',
        content: 'This is step 1 of the tour.',
      },
    ];

    this.tourService.initialize(steps);
  }

  startTour() {
    this.tourService.start();
  }
}

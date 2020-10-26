import { Observable, Subscription } from 'rxjs';
import { DonorService } from './../../services/donor.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss'],
})
export class DonorComponent implements OnInit, OnDestroy {
  // donors$: Observable<any>;
  donorSubscirption: Subscription;
  donors = [];
  constructor(private donorService: DonorService) {}

  ngOnInit(): void {
    this.donorSubscirption = this.donorService
      .getDonors()
      .subscribe((response) => {
        this.donors = response;
      });
  }

  ngOnDestroy(): void {
    this.donorSubscirption.unsubscribe();
  }
}

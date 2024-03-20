import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../reservation.service';
import { HomeComponent } from "../../home/home.component";

@Component({
    selector: 'app-reservation-list',
    standalone: true,
    templateUrl: './reservation-list.component.html',
    styleUrl: './reservation-list.component.scss',
    imports: [CommonModule, RouterModule, HomeComponent]
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}

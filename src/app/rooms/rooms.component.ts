import { Component } from '@angular/core';
import { IRoom, IRoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  rooms: IRoom = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 5,
  };

  roomList: IRoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenenities: 'Wifi TV',
      price: 500,
      photos: 'https://picsum.photos/200/300',
      checkInTime: new Date('11-Jun-2023'),
      checkOutTime: new Date('13-Jun-2023'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe -',
      amenenities: 'Wifi TV Kitchen',
      price: 333,
      photos: 'https://picsum.photos/200/301',
      checkInTime: new Date('12-Jun-2023'),
      checkOutTime: new Date('14-Jun-2023'),
    },
    {
      roomNumber: 3,
      roomType: 'Private',
      amenenities: 'Wifi TV Kitchen air conditionning',
      price: 3333,
      photos: 'https://picsum.photos/200/302',
      checkInTime: new Date('12-Jun-2023'),
      checkOutTime: new Date('14-Jun-2023'),
    },
  ];

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

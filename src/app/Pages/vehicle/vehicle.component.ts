import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  imports: [CommonModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {

    vehicleFormData = signal({
      carId: 0,
      brand: "",
      model: "",
      year:0,
      color: "",
      dailyRate: 0,
      carImage:"",
      regNo:""
    });

    carList$: Observable<any[]> = new Observable<any[]>;

    http = inject(HttpClient);
    apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/";
item: any;

    constructor(){
      this.carList$ = this.http.get<any[]>(`${this.apiUrl}GetCars`).pipe(
        map((result:any)=>{
          return result.data
        })
      );
    }

    updateForm(key: string, event: any) {
      debugger;
      this.vehicleFormData.update((data:any)=>({...data,[key]:event.target.value}))
    }
    onSaveCar(){
      this.http.post(`${this.apiUrl}CreateNewCar`,this.vehicleFormData()).subscribe((res: any)=>{
        if(res.result) {
          alert("Vehicle Created Success")
        }else{
          alert(res.message)
        }
      })
    }
}

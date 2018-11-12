import {Component, OnInit} from '@angular/core';
import {ZwaveSensorService} from "../zwave.sensor.service";
import {ZwaveSensor} from "../zwave.sensor.model";

@Component({
  selector: 'zwave-sensors-configuration',
  templateUrl: './zwave.sensors.configuration.component.html'
})
export class ZwaveSensorsConfigurationComponent implements OnInit {
  title: string = "Zwave Sensors Configuration";
  sensors: ZwaveSensor[] = [];
  selectedSensors: ZwaveSensor[] = [];

  constructor(private zwaveSensorService: ZwaveSensorService) {

  }

  ngOnInit() {
    this.getHaSensors();
  }


  getHaSensors() {
    this.zwaveSensorService.getHaSensors()
      .subscribe(sensors => {
        sensors.forEach(sensor => this.zwaveSensorService.addSensor(sensor));
        this.sensors = this.zwaveSensorService.sensors;
      });
  }


  selectSensor(sensor: ZwaveSensor): void {
    var foundSensor = this.selectedSensors.find(s => s.haId === sensor.haId);
    if (!foundSensor) {
      this.selectedSensors.push(sensor);
    }

    this.enableSensor(sensor);
  }


  deselectSensor(sensor: ZwaveSensor): void {
    var foundSensor = this.selectedSensors.find(s => s.haId === sensor.haId);
    if (foundSensor) {
      this.selectedSensors = this.selectedSensors.filter(s => s.haId !== sensor.haId)
    }
    this.disableSensor(sensor);
  }


  enableSensor(sensor: ZwaveSensor): void {

  }

  disableSensor(sensor: ZwaveSensor): void {

  }


  saveSensor(sensor):void {
    this.zwaveSensorService.saveSensor(sensor)
      .subscribe( _ => this.getHaSensors());
  }

  isSelected(sensor: ZwaveSensor): boolean {
    return !!this.selectedSensors.find(s => s.haId === sensor.haId);
  }
}

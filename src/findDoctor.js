import { Doctor } from './doctor.js'

export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctorsArray = [];
    body.data.forEach(function (doctor) {
      let doctors = new Doctor(doctor.profile);
      doctorsArray.push(doctors);
    });
    return doctorsArray;
  }
}
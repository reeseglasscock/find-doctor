import { Doctor } from './doctor.js'

export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctorsArray = [];
    body.data.forEach(function (doctor) {
      let doctors = new Doctor(doctor.profile.first_name, doctor.profile.last_name, doctor.profile.image_url, doctor.profile.gender, doctor.profile.bio);
      doctorsArray.push(doctors);
    });
    return doctorsArray;
  }
}
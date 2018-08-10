import { Doctor } from './doctor.js'

export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctorsArray = [];
    body.data.forEach(function (doctor) {
      let doctors = new Doctor(doctor.profile.first_name, doctor.profile.last_name, doctor.profile.image_url, doctor.profile.gender, doctor.profile.bio, `${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.street2}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}`, doctor.practices[0].phones[0].number, doctor.practices[0].website, doctor.practices[0].accepts_new_patients);
      doctorsArray.push(doctors);
    });
    return doctorsArray;
  }
}
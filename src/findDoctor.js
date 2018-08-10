import { Doctor } from './doctor.js';

export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctorsArray = [];
    body.data.forEach(function (doctor) {
      let acceptingNewPatients = "";
      let street2 = '';
      let website = '';
      if (doctor.practices[0].accepts_new_patients == true) {
        acceptingNewPatients = "Yes";
      } else {
        acceptingNewPatients = "No";
      }
      if (doctor.practices[0].visit_address.street2 == null) {
        street2 = '';
      } else{
        street2 = doctor.practices[0].visit_address.street2 + ",";
      }
      if (doctor.practices[0].website == null) {
        website = '';
      } else{
        website = doctor.practices[0].website;
      }
      let doctors = new Doctor(doctor.profile.first_name, doctor.profile.last_name, doctor.profile.image_url, doctor.profile.gender, doctor.profile.bio, `${doctor.practices[0].visit_address.street}, ` + street2 + ` ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}`, doctor.practices[0].phones[0].number, acceptingNewPatients, website);
      console.log(street2);
      
      doctorsArray.push(doctors);
    });
    return doctorsArray;
  }
}
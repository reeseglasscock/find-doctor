import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FindDoctorService } from './findDoctorService.js';
import { FindDoctor } from './findDoctor.js';

$(document).ready(function(){
  $('#checkSymptom').click(function(){
    $('#availableDoctors').text('')
    let symptom = $('#userSymptom').val();
    let findDoctorService = new FindDoctorService();
    let promise = findDoctorService.getDoctorBySymptom(symptom);
    
    promise.then(function(response){
      let findDoctors = new FindDoctor();
      let foundDoctors = findDoctors.getDoctor(response)
      
        foundDoctors.forEach(doctor => {
          console.log(doctor.picture)
          $('#availableDoctors').append(
            `<div class="card">
              <img src=${doctor.picture}>
              <p>${doctor.firstName} ${doctor.lastName}</p>
              <p>${doctor.bio}</p>
            </div>`
        )
      })
    })
  });
});
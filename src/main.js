import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FindDoctorService } from './findDoctorService.js';
import { FindDoctor } from './findDoctor.js';

$(document).ready(function(){
  $('#checkSymptom').click(function(){
    $('.availableDoctors').text('');
    let symptom = $('#userSymptom').val();
    let findDoctorService = new FindDoctorService();
    let promise = findDoctorService.getDoctorBySymptom(symptom);
    
    promise.then(function(response){
      let findDoctors = new FindDoctor();
      let foundDoctors = findDoctors.getDoctor(response);
      
      foundDoctors.forEach(doctor => {
        $('.availableDoctors').append(
          `<div class="card">
              <div class="row">
                <div class="doctorImageContainer col-md-2">
                  <img class="doctorImage" src=${doctor.picture}>
                </div>
                <div class="doctorInformation col">
                  <p>${doctor.firstName} ${doctor.lastName}</p>
                  <p>Address: ${doctor.address}</p>
                  <p>Phone Number: ${doctor.phoneNumber} ${doctor.website}</p>
                  <p>Accepting Patients: ${doctor.acceptingPatients}</p>
                  <p>${doctor.bio}</p>
                </div>
              </div>
            </div>`
        );
      });
    });
  });
  $('#findDoctor').click(function(){
    $('.availableDoctors').text('');
    let doctorName = $('#userDoctor').val();
    let findDoctorService = new FindDoctorService();
    let promise2 = findDoctorService.getDoctorByName(doctorName);
    
    promise2.then(function(response){
      let findDoctors = new FindDoctor();
      let foundDoctors = findDoctors.getDoctor(response);
      
      foundDoctors.forEach(doctor => {
        $('.availableDoctors').append(
          `<div class="card">
              <div class="row">
                <div class="doctorImageContainer col-md-2">
                  <img class="doctorImage" src=${doctor.picture}>
                </div>
                <div class="doctorInformation col">
                  <p>${doctor.firstName} ${doctor.lastName}</p>
                  <p>Address: ${doctor.address}</p>
                  <p>Phone Number: ${doctor.phoneNumber} ${doctor.website}</p>
                  <p>Accepting Patients: ${doctor.acceptingPatients}</p>
                  <p>${doctor.bio}</p>
                </div>
              </div>
              
            </div>`
        );
      });
    });
  });
});
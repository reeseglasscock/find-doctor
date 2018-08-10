import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FindDoctorService } from './findDoctorService.js';
import { FindDoctor } from './findDoctor.js';

$(document).ready(function(){
  $('#checkSymptom').click(function(){
    let symptom = $('#userSymptom').val();
    let findDoctorService = new FindDoctorService();
    let findDoctor = new FindDoctor();
    console.log(findDoctor);
    
  });
});
export class FindDoctorService {
  getDoctorBySymptom(symptom) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=OR&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=705b26eb924e6457d986841e5241ef17&query=acne`;
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
# Doctor Finder

This program pulls from a doctor api and will list out what doctors are available in the area either by name or by a symptom that a user is experiencing. 

### Installing

Complete the steps below to clone the project on to your personal machine and get the application running.

Clone the repo from github to your machine

```
git clone https://github.com/reeseglasscock/find-doctor.git
```

This program is dependent that you already have node installed on your machine and node package manager. Afterwards run the install command.

```
npm install
```

You will then need to make sure you get your API key set up to run the program. You can register for your API by going to https://developer.betterdoctor.com/signup to sign up. Afterwards create a .env file and save your key with the variable exports.apiKey=[YOUR_API_KEY]:

```
touch .env
```

To run the program run the command from the project file:

```
npm run start
```

Your browser should automatically open and point towards http://localhost:8080/. If not you can run the command below:
```
open http://localhost:8080/
```

## Built With

* [Node](https://nodejs.org/en/) - 10.7.0

## User Stories

* as a user I can enter a name for a doctor I want to find and have a list of max 10 doctors appear.
* as a user I can enter a symptom I may have and get a list of max 10 doctors in the area.

## Authors

* **Reese Glasscock** [Github](https://github.com/reeseglasscock)

## License

This project is licensed under the MIT License

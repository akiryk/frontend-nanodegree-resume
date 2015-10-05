/*
This is empty on purpose! Your code to build the resume will go here.

* ASSIGNMENT:
* Create four JSON correct objects with data for bio, work, education, and projects.
* Then extend those object with functions that encapsulate functionality for displaying the data.
* e.g. bio = { ... }
* bio.display = function(){ ... }
* Finally, make it look cool, add additional libraries, etc.
* Maybe use d3.js
 */

var replaceData = function(helper, value){
  return helper.replace("%data%", value);
};


var bio = {
    "name": "Adam Kiryk",
    "role": "Front End Developer",
    "contacts": {
      "mobile": "617.661.6554",
      "email": "adamkiryk@gmail.com",
      "github": "github.com/locationyk/",
      "twitter": "@akiryk",
      "location": "22 Fresh Pond Lane, Cambridge, MA"
    },
    "welcomeMessage": "Hi, I'm here!",
    "skills": [
      "Design",
      "CSS",
      "User Experience",
      "HTML",
      "Wordpress",
      "javascript"
    ],
    "biopic": "images/fry.jpg",

    display: function() {

    var $header = $("#header");

    var formattedHeaderName = replaceData(HTMLheaderName, bio.name),
        formattedHeaderRole = replaceData(HTMLheaderRole, bio.role);

    // Add the two strings together, then prepend.
    $header.prepend( formattedHeaderName + formattedHeaderRole);

    var formattedMobile = replaceData(HTMLmobile, bio.contacts.mobile),
        formattedEmail = replaceData(HTMLemail, bio.contacts.email),
        formattedGithub = replaceData(HTMLgithub, bio.contacts.github),
        formattedTwitter = replaceData(HTMLtwitter, bio.contacts.twitter),
        formattedLocation = replaceData(HTMLlocation, bio.contacts.location);

    // Create a temp bit of html so as minimize DOM replaceDatas.
    var $tempUL = $('<ul></ul>');

    $tempUL
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedTwitter)
      .append(formattedLocation);

    $tempUL
      .find('li')
      .appendTo($('#topContacts'))
      .clone()
      .appendTo($('#footerContacts'));

    $tempUL.remove(); // is this necessary?

    var formattedImage = replaceData(HTMLbioPic, bio.biopic);

    var len = bio.skills.length,
        tmpSkills = '';

    for (var i=0; i<len; i++){
      tmpSkills += replaceData(HTMLskills, bio.skills[i]);
    }

    // Add the three strings together, then append.
    $header.append(formattedImage + HTMLskillsStart + tmpSkills);

  }
}


var work = {
  "jobs": [
    {
      "employer": "NPR",
      "title": "UX Manager",
      "location": "Boston",
      "dates": "2013-2015",
      "description": "On this job I Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sapiente soluta laudantium quis, ratione iusto deserunt nihil explicabo fuga molestias! Voluptates distinctio numquam sit, ab velit explicabo, at soluta. Dolores."
    },
    {
      "employer": "NPR",
      "title": "Product Designer",
      "location": "Boston",
      "dates": "2011-2013",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptatibus amet vel expedita recusandae adipisci, neque provident, quisquam, inventore deleniti alias fuga dolorem ipsa. Laudantium, minima! Voluptatum voluptate voluptatem ea?"
    },
    {
      "employer": "Arnold",
      "title": "Associate Creative Director",
      "location": "Boston",
      "dates": "2010-2011",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque architecto a quos, ab sapiente ea laboriosam amet exercitationem numquam quam magni debitis, cum quasi dolor aut ut, repudiandae. Modi."
    }
  ],

  display: function(){
    var jobs = work.jobs,
      formattedEmployer,
      formattedTitle,
      formattedLocation,
      formattedDates,
      formattedDescription,
      workArray = [],
      $HTMLwork;

    for (var job in jobs) {
      $("#workExperience").append(HTMLworkStart);
      formattedEmployer = replaceData(HTMLworkEmployer, jobs[job].employer);
      formattedTitle = replaceData(HTMLworkTitle, jobs[job].title);
      formattedLocation = replaceData(HTMLworkLocation, jobs[job].location);
      formattedDates = replaceData(HTMLworkDates, jobs[job].dates);
      formattedDescription = replaceData(HTMLworkDescription, jobs[job].description);
      $(".work-entry:last").append(formattedEmployer +formattedTitle + formattedLocation + formattedDates + formattedDescription);
    }
  }
}

var projects = {
  "projects": [
    {
      "title": "A blog",
      "dates": "2010",
      "description": "This was a blog I made",
      "image": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "A game",
      "dates": "2010",
      "description": "This was a blog I made",
      "image": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "A website",
      "dates": "2010",
      "description": "This was a blog I made",
      "image": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ],
  display:function(){
    var myProjects = projects.projects,
        formattedTitle,
        formattedDates,
        formattedDescription;

    for (var project in myProjects) {
      $("#projects").append(HTMLprojectStart);
      formattedTitle = replaceData(HTMLprojectTitle, myProjects[project].title);
      formattedDates = replaceData(HTMLprojectDates, myProjects[project].dates);
      formattedDescription = replaceData(HTMLprojectDescription, myProjects[project].description);
      formattedImages = getImages(myProjects[project].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImages);
    }

    function getImages(arr){
      var images = '';
      for (var i=0; i<arr.length; i++){
        images += replaceData(HTMLprojectImage, arr[i]);
      }
      return images;
    }
  }
}



var education = {

  "schools": [
    {
      "schoolName": "Oberlin College",
      "degree": "B.A",
      "years": "1987-1992",
      "major": "Environmental Studies",
      "location": "Oberlin, OH"
    },
    {
      "schoolName": "California College of Art",
      "degree": "Graphic Design",
      "years": "1998-2001",
      "major": "Interaction Design",
      "location": "San Francisco"
    }
  ],

  "online": [
    {
      "title": "Responsive Images",
      "schoolName": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "schoolName": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    },
    {
      "title": "How To Use Git And Github",
      "schoolName": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    }
  ],

  display: function(){
    var schools = education.schools,
        onlineSchools = education.online,
        formattedSchool,
        formattedDegree,
        formattedYears,
        formattedMajor,
        formattedLocation;

    for (var school in schools) {
      $("#education").append(HTMLschoolStart);
      formattedSchool = replaceData(HTMLschoolName, schools[school].schoolName);
      formattedDegree = replaceData(HTMLschoolDegree, schools[school].degree);
      formattedYears = replaceData(HTMLschoolDates, schools[school].years);
      formattedLocation = replaceData(HTMLschoolLocation, schools[school].location);
      formattedMajor = replaceData(HTMLschoolMajor, schools[school].major);
      $(".education-entry:last").append(formattedSchool + formattedDegree + formattedYears + formattedLocation + formattedMajor);
    }

    if (onlineSchools.length > 0){
      $("#education").append(HTMLonlineClasses);
      for (var school in onlineSchools){
        $("#education").append(HTMLschoolStart);
        var title = replaceData(HTMLonlineTitle, onlineSchools[school].title);
        var schoolName = replaceData(HTMLonlineSchool, onlineSchools[school].schoolName);
        var dates = replaceData(HTMLonlineDates, onlineSchools[school].dates);
        var url = replaceData(HTMLonlineURL, onlineSchools[school].url);
        $(".education-entry:last").append(title + schoolName + dates + url);
      }
    }
  }
}


projects.display();
education.display();
bio.display();
work.display();


$("#mapDiv").append(googleMap);
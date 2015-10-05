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
}

bio.display = function() {
  var $header = $('#header'),
      formattedHeaderName = HTMLheaderName.replace('%data%', bio.name),
      formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);

  // Add the two strings together, then prepend.
  $header.prepend( formattedHeaderName + formattedHeaderRole);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
      formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
      formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github),
      formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
      formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

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

  var formattedImage = HTMLbioPic.replace('%data%', bio.biopic);

  var len = bio.skills.length,
      tmpSkills = '';

  for (var i=0; i<len; i++){
    tmpSkills += HTMLskills.replace('%data%', bio.skills[i]);
  }

  // Add the three strings together, then append.
  $header.append(formattedImage + HTMLskillsStart + tmpSkills);

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
}

work.display = function(){
  var jobs = work.jobs,
      len = work.jobs.length,
      formattedEmployer,
      formattedTitle,
      formattedLocation,
      formattedDates,
      formattedDescription,
      workArray = [],
      $experience = $('#workExperience');

  for (var i=0; i<len; i++) {
    $experience.append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace('%data%', jobs[i].employer);
    formattedTitle = HTMLworkTitle.replace('%data%', jobs[i].title);
    formattedLocation = HTMLworkLocation.replace('%data%', jobs[i].location);
    formattedDates = HTMLworkDates.replace('%data%', jobs[i].dates);
    formattedDescription = HTMLworkDescription.replace('%data%', jobs[i].description);
    $('.work-entry:last').append(formattedEmployer +formattedTitle + formattedLocation + formattedDates + formattedDescription);
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
        "images/197x148.gif",
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
}

projects.display = function(){
  var myProjects = projects.projects,
      len = myProjects.length,
      formattedTitle,
      formattedDates,
      formattedDescription,
      $projects = $('#projects');

  for (var i=0; i<len; i++) {
    $projects.append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace('%data%', myProjects[i].title);
    formattedDates = HTMLprojectDates.replace('%data%', myProjects[i].dates);
    formattedDescription = HTMLprojectDescription.replace('%data%', myProjects[i].description);
    formattedImages = getImages(myProjects[i].image);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription + formattedImages);
  }

  function getImages(imgArray){
    var images = '';
    for (var i=0; i<imgArray.length; i++){
      images += HTMLprojectImage.replace('%data%', imgArray[i]);
    }
    return images;
  }
}

var education = {

  "schools": [
    {
      "name": "Oberlin College",
      "degree": "B.A",
      "years": "1987-1992",
      "major": "Environmental Studies",
      "location": "Oberlin, OH"
    },
    {
      "name": "California College of Art",
      "degree": "Graphic Design",
      "years": "1998-2001",
      "major": "Interaction Design",
      "location": "San Francisco"
    }
  ],

  "online": [
    {
      "title": "Responsive Images",
      "name": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "name": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    },
    {
      "title": "How To Use Git And Github",
      "name": "Udacity",
      "dates": "September, 2015",
      "url": "http://www.udacity.com"
    }
  ],
}

education.display = function(){
  var schools = education.schools,
      len = schools.length,
      onlineSchools = education.online,
      formattedSchool,
      formattedDegree,
      formattedYears,
      formattedMajor,
      formattedLocation,
      $education = $('#education');

  for (var i=0; i<len ; i++) {
    $education.append(HTMLschoolStart);
    formattedSchool = HTMLschoolName.replace('%data%', schools[i].name);
    formattedDegree = HTMLschoolDegree.replace('%data%', schools[i].degree);
    formattedYears = HTMLschoolDates.replace('%data%', schools[i].years);
    formattedLocation = HTMLschoolLocation.replace('%data%', schools[i].location);
    formattedMajor = HTMLschoolMajor.replace('%data%', schools[i].major);
    $('.education-entry:last').append(formattedSchool + formattedDegree + formattedYears + formattedLocation + formattedMajor);
  }

  if (onlineSchools.length > 0){
    $('#education').append(HTMLonlineClasses);
    for (var school in onlineSchools){
      $('#education').append(HTMLschoolStart);
      var title = HTMLonlineTitle.replace('%data%', onlineSchools[school].title);
      var schoolName = HTMLonlineSchool.replace('%data%', onlineSchools[school].name);
      var dates = HTMLonlineDates.replace('%data%', onlineSchools[school].dates);
      var url = HTMLonlineURL.replace('%data%', onlineSchools[school].url);
      $('.education-entry:last').append(title + schoolName + dates + url);
    }
  }
}

projects.display();
education.display();
bio.display();
work.display();


$('#mapDiv').append(googleMap);
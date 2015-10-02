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
  "contact": {
    "location": "22 Fresh Pond Lane, Cambridge, MA",
    "email": "adamkiryk@gmail.com"
  },
  "pictureURL": "images/fry.jpg",
  "welcomeMsg": "Hi, I'm here!",
  "skills": ["Design", "Programming", "Cooking", "HTML", "CSS", "javascript"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%", bio.role),
    picture = HTMLbioPic.replace("%data%", bio.pictureURL),
    welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    contact = HTMLcontactGeneric.replace("%contact%", "Address");
    address = contact.replace("%data%", bio.contact.address);

var $header = $("#header"),
    $temp = $('<div></div>');

// TODO: Determine if this is most efficient way
$temp
  .append(formattedName)
  .append(formattedRole)
  .append(address)
  .append(picture)
  .append(welcome)
  .append(HTMLskillsStart);


if (bio.skills.length){
  var skills = bio.skills,
      $listOfSkills = $temp.find("#skills"),
      len = bio.skills.length,
      skill;

  for (var i=0; i<len; i++){
    skill = HTMLskills.replace("%data%", skills[i]);
    $listOfSkills.append(skill);
  }
}

$header.append($temp.html());
$temp = null; //necessary?

var work = {
  "jobs": [
    {
      "title": "UX Manager",
      "employer": "NPR",
      "years": "2013-2015",
      "location": "Boston",
      "desc": "On this job I Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sapiente soluta laudantium quis, ratione iusto deserunt nihil explicabo fuga molestias! Voluptates distinctio numquam sit, ab velit explicabo, at soluta. Dolores."
    },
    {
      "title": "Product Designer",
      "employer": "NPR",
      "years": "2011-2013",
      "location": "Boston",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptatibus amet vel expedita recusandae adipisci, neque provident, quisquam, inventore deleniti alias fuga dolorem ipsa. Laudantium, minima! Voluptatum voluptate voluptatem ea?"
    },
    {
      "title": "Associate Creative Director",
      "employer": "Arnold",
      "years": "2010-2011",
      "location": "Boston",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque architecto a quos, ab sapiente ea laboriosam amet exercitationem numquam quam magni debitis, cum quasi dolor aut ut, repudiandae. Modi."
    }
  ]
}

function displayWork(){
  var jobs = work.jobs,
    len = jobs.length;

  for (var i=0; i<len; i++){
    var employer = HTMLworkEmployer.replace("%data%", jobs[i].employer),
        title = HTMLworkTitle.replace("%data%", jobs[i].title),
        years = HTMLworkDates.replace("%data%", jobs[i].years),
        location = HTMLworkLocation.replace("%data%", jobs[i].location),
        description = HTMLworkDescription.replace("%data%", jobs[i].desc),
        $workStart = $(HTMLworkStart);

    $workStart
      .append(employer + title)
      .append(years)
      .append(location)
      .append(description);

    $("#workExperience").append($workStart);
  }
}
displayWork();

var projects = {
  "projects": [
    {
      "title": "A blog",
      "dates": "2010",
      "image": "images/197x148.gif",
      "description": "This was a blog I made"
    },
    {
      "title": "An App",
      "dates": "2012",
      "image": "images/197x148.gif",
      "description": "This is an application"
    },
    {
      "title": "A game",
      "dates": "2014",
      "image": "images/197x148.gif",
      "description": "This is a fun game"
    }
  ]
}

projects.display = function(){
  var prjcts = projects.projects;
  len = prjcts.length;

  for (var i=0; i<len; i++){
    var title = HTMLprojectTitle.replace("%data%", prjcts[i].title),
        dates = HTMLprojectDates.replace("%data%", prjcts[i].dates),
        desc = HTMLprojectDescription.replace("%data%", prjcts[i].description),
        image = HTMLprojectImage.replace("%data%", prjcts[i].image),
        $projectStart = $(HTMLprojectStart);

    $projectStart
      .append(title)
      .append(dates)
      .append(desc)
      .append(image);

    $("#projects").append($projectStart);
  }
}

projects.display();


var education = {
  "schools": [
    {
      "school": "Oberlin College",
      "degree": "B.A",
      "years": "1987-1992",
      "major": "Environmental Studies",
      "location": "Oberlin, OH"
    },
    {
      "school": "California College of Art",
      "degree": "Graphic Design",
      "years": "1998-2001",
      "major": "Interaction Design",
      "location": "San Francisco"
    }
  ],
  "online": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udacity",
      "dates": "ongoing",
      "url": "http://www.udacity.com"
    }
  ]
}

var schools = education.schools;
len = schools.length;

for (var i=0; i<len; i++){
  var school = HTMLschoolName.replace("%data%", schools[i].school),
      dates = HTMLschoolDates.replace("%data%", schools[i].years),
      degree = HTMLschoolDegree.replace("%data%", schools[i].degree),
      city = HTMLschoolLocation.replace("%data%", schools[i].location),
      major = HTMLschoolDegree.replace("%data%", schools[i].major),
      $schoolStart = $(HTMLschoolStart);

  $schoolStart
    .append(school)
    .append(dates)
    .append(degree)
    .append(major)
    .append(city);

  $("#education").append($schoolStart);
}

document.addEventListener('click', function(loc){
  console.log(loc.clientX, loc.clientY);
})

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

// $(document).click(function(loc) {
//   console.log(loc.clientX, loc.clientY);
// });
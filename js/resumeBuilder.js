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

var utils = {

  serializeObject: function(obj){

    var data = category[value],
        concatenatedData = "",
        helper;

    for (prop in data){
      helper = helper.replace("%data%", data[prop]);
      concatenatedData += helper;
    }
    return concatenatedData;

  }

}

var bio = {
    "name": "Adam Kiryk",
    "role": "Front End Developer",
    "contacts": {
      "mobile": "617.661.6554",
      "email": "adamkiryk@gmail.com",
      "github": "github.com/akiryk/",
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
    "biopic": "images/fry.jpg"
  };

  bio.display = function(){

    var $header = $("#header");

    $header.prepend( utils.serializeObject(bio, "generalInfo", headerHelpers) );
    $("#topContacts").append( utils.serializeObject(bio, "contact", contactInfoHelpers) );
    //$header.append( getSkills() );


    function getSkills(){

      var skills = bio.skills,
          concatenatedSkills = "",
          helper;

      for (skill in skills){
        helper = HTMLskills;
        helper = helper.replace("%data%", skills[skill]);
        concatenatedSkills += helper;
      }
      return HTMLskillsStart + concatenatedSkills;

    }
  }

}

bio.display();

var education = {
  "schools": [
    {
      "name": "Oberlin College",
      "location": "Oberlin, OH",
      "degree": "B.A",
      "majors": [
        "Environmental Studies",
        "Biology"
      ],
      "dates": 1992,
      "url": "http://www.oberlin.edu"
    },
    {
      "name": "California College of Art",
      "location": "San Francisco",
      "degree": [
        "Graphic Design"
      ],
      "majors": "Interaction Design",
      "dates": 2001,
      "url": "http://cca.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udacity",
      "date": 2016,
      "url": "http://www.udacity.com"
    }
  ]
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
  ]
}

work.display = function(){
  var jobs = work.jobs,
    len = jobs.length;

  for (var i=0; i<len; i++){
    utils.serializeObject(work, "jobs", worksHelpers);
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

// projects.display();


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

education.display = function(){
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

}

$//("#mapDiv").append(googleMap);
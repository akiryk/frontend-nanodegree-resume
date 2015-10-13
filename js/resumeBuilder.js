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
    "biopic": "images/pic-alt2.jpg",
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

  if (len){
    for (var i=0; i<len; i++){
      tmpSkills += HTMLskills.replace('%data%', bio.skills[i]);
    }
  }

  // Add the three strings together, then append.
  $header.append(formattedImage + HTMLskillsStart);

  $("#skills").append(tmpSkills);

}


var work = {
  "jobs": [
    {
      "employer": "NPR",
      "title": "UX Manager",
      "location": "Boston",
      "dates": "2013-2015",
      "description": "Improved the status of design as a discipline at NPR Digital Services by making it more central to our agile development process and leading a variety of projects, from creating user interfaces to improving team dynamics."
    },
    {
      "employer": "NPR",
      "title": "Product Designer",
      "location": "Boston",
      "dates": "2011-2013",
      "description": "Provided key insight and direction — especially at early stages - to the user experience of a responsive web-site redesign for NPR member stations. Improved the usability of our content management system for editors by researching users and implementing new designs.Designed a flexible homepage template that balanced the requirements of diverse member stations with NPR’s news-oriented objectives"
    },
    {
      "employer": "Arnold",
      "title": "Associate Creative Director",
      "location": "Boston",
      "dates": "2010-2011",
      "description": "Conceived and designed digital work for clients such as Progressive Insurance, OceanSpray, and Carnival Cruise Lines — including web sites, emails, landing pages, and online advertisements — at Arnold Worldwide"
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

  if (len){
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

}

var projects = {
  "projects": [
    {
      "title": "Core Publisher, Responsive News Platform",
      "dates": "2013-2015",
      "description": "I worked on a team at NPR to design and build this Drupal-based content management system and distribution platform for NPR member stations. As a front-end developer, I helped create the 'theme,' including writing php templates, css (sass), and javascript. Click on the images below to see examples of different stations' sites.",
      "images": [
        {
          "imageLarge": "images/kuow-large.jpg",
          "imageSmall": "images/kuow-small.jpg",
          "imageAlt": "An example responsive news site for KUOW radio"
        },
        {
          "imageLarge": "images/kplu-large.jpg",
          "imageSmall": "images/kplu-small.jpg",
          "imageAlt": "An example responsive news site for KPLU radio"
        },
        {
          "imageLarge": "images/boise-large.jpg",
          "imageSmall": "images/boise-small.jpg",
          "imageAlt": "An example responsive news site for Boise Public radio"
        }
      ]
    },
    {
      "title": "Columnar, A Tool For Flex-Based Grids",
      "dates": "2015",
      "description": "This is a tool I created for making grids based on the flex-box module. Simply choose how many columns you want and drag the boxes to your desired widths. Adjust the gutters as well — and then output markup and css you can paste directly into your site.",
      "images": [
        {
          "imageLarge": "images/columnar-large.jpg",
          "imageSmall": "images/columnar-small.jpg",
          "imageAlt": "Screengrab of a grid-making online tool"
        },
        {
          "imageLarge": "images/columnar2-large.jpg",
          "imageSmall": "images/columnar2-small.jpg",
          "imageAlt": "Screengrab of a grid-making online tool"
        },
        {
          "imageLarge": "images/columnar3-large.jpg",
          "imageSmall": "images/columnar3-small.jpg",
          "imageAlt": "Screengrab of a grid-making online tool"
        }
      ]
    },
    {
      "title": "Gronster, A Game",
      "dates": "2012",
      "description": "Gronster is a drawing game for one to three people based on an old pen and paper game sometimes called 'Exquisite Corpse.' The idea is for each person to contribute to the end-result without knowing what the others have drawn. I built Gronster using cakephp and javascript.",
      "images": [
        {
          "imageLarge": "images/g1-large.jpg",
          "imageSmall": "images/g1-small.jpg",
          "imageAlt": "Homepage of Gronster, a drawing app"
        },
        {
          "imageLarge": "images/g2-large.jpg",
          "imageSmall": "images/g2-small.jpg",
          "imageAlt": "Starting to draw with the Gronster app"
        },
        {
          "imageLarge": "images/g4-large.jpg",
          "imageSmall": "images/g4-small.jpg",
          "imageAlt": "A completed drawing made of three parts."
        }
      ]
    }
  ]
}

projects.display = function(){
  var myProjects = projects.projects,
      len = myProjects.length,
      formattedTitle,
      formattedDates,
      formattedDescription,
      $projects = $('#projects');

  if (len){
    for (var i=0; i<len; i++) {
      $projects.append(HTMLprojectStart);
      formattedTitle = HTMLprojectTitle.replace('%data%', myProjects[i].title);
      formattedDates = HTMLprojectDates.replace('%data%', myProjects[i].dates);
      formattedDescription = HTMLprojectDescription.replace('%data%', myProjects[i].description);
      formattedImages = getImages(myProjects[i].images);
      $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription + formattedImages);
    }
  }

  function getImages(imgArray){

    if (!imgArray.length) return;

    var images = '<div class="project-images flex-box">';
    var str = '';
    var mapObj = {};

    for (var i=0; i<imgArray.length; i++){
      mapObj["%dataImgSrc%"] = imgArray[i].imageLarge;
      mapObj["%dataAlt%"] = imgArray[i].imageAlt;
      mapObj["%data%"] = imgArray[i].imageSmall;
      str = HTMLprojectImage.replace(/%dataImgSrc%|%dataAlt%|%data%/gi, function(matched){
        return mapObj[matched];
      });
      images += str; //HTMLprojectImage.replace('%data%', imgArray[i]);
    }
    images += '</div>'
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

  if (len){
    for (var i=0; i<len ; i++) {
      $education.append(HTMLschoolStart);
      formattedSchool = HTMLschoolName.replace('%data%', schools[i].name);
      formattedDegree = HTMLschoolDegree.replace('%data%', schools[i].degree);
      formattedYears = HTMLschoolDates.replace('%data%', schools[i].years);
      formattedLocation = HTMLschoolLocation.replace('%data%', schools[i].location);
      formattedMajor = HTMLschoolMajor.replace('%data%', schools[i].major);
      $('.education-entry:last').append(formattedSchool + formattedDegree  + formattedLocation + formattedYears + formattedMajor);
    }
  }

  if (onlineSchools.length){
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

var dataVis = {

  chartSpecs: function(){
    var w = window.innerWidth;
    return {
      width: w <= 900 ? w-40: 900,
      height: 500,
      margin: 70
    }
  },

  chart: null,

  loadData: function(year){
    this.chart.loadData(year);
    return this.chart;
  },

  // Create a chart and pass it x, y, and r scaling functions.
  display: function(year){
    var specs = this.chartSpecs();
    this.chart = bubbleChart( specs )
        .x(d3.scale.linear()
          .domain([0, 100])
          .clamp(true)
          .range([5,specs.width-specs.margin]))
        .y(d3.scale.linear()
          .domain([0, 100])
          .clamp(true)
          .range([specs.height - specs.margin, 0]))
        .r(d3.scale.linear()
          .clamp(true)
          .domain([0,100])
          .range([5,75]))
        .loadData(year);
  },

  fitBounds: function(){
    this.chart.nullify(); // clear out chart from the DOM
    this.display();
  },

  updateData: function(year){
    this.loadData(year);
    this.chart.hideToolTip();
    this.udpateYearLabel(year);
  },

  udpateYearLabel: function(year, label){
    var label = document.getElementById('year-label');
    label.textContent = year;
  }
}

// Put a map on the page!
$('#mapDiv').append(googleMap);

/*
 * Prevent resize event from firing so many times that it
 * affects performance
 */
var debounce = function(fn, delay){
  var timeout;
  return function(){
    var context = this,
        args = arguments;
    var later = function(){
      timeout = null;
      fn.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  }
}

$(document).ready(function() {

  dataVis.display(2015);

  /*
   * Magnefic gallery pop-up code for project images.
   */

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  /*
   * Data visualization controls
   */

  var slider = document.getElementById('slider');

  slider.addEventListener('change', sliderChange);

  function sliderChange(e){
    dataVis.updateData(e.target.value);
  }

  var efficientChecker = debounce( function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
    // Adjust the bubble chart to the new dimensions
    dataVis.fitBounds();
  }, 400 );

  // Vanilla JS way to listen for resizing of the window
  // and adjust map bounds
  window.addEventListener('resize', efficientChecker);

});
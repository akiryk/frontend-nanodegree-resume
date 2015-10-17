var jsonData =  {
  "year2015": [
    {
        "activity": "Running/Fitness",
        "skill": 80,
        "frequency": 100,
        "enjoyment": 90,
        "description": "Running, biking, going to the gym, that sort of thing."
    },
    {
      "activity": "Front-end Dev",
        "skill": 75,
        "frequency": 90,
        "enjoyment": 95,
        "description": "I'm taking this course, but already have a good deal of experience."
    },
    {
      "activity": "Travel/Adventure",
        "skill": 80,
        "frequency": 20,
        "enjoyment": 99,
        "description": "I love traveling, hiking, exploring new places."
    },
    {
      "activity": "Backend Dev",
        "skill": 20,
        "frequency": 19,
        "enjoyment": 60,
        "description": "Some php; some node."
    },
    {
      "activity": "Guitar",
        "skill": 25,
        "frequency": 20,
        "enjoyment": 15,
        "description": "I've played since I was a kid and have gone through phases of doing it more or less."
    },
    {
      "activity": "Cooking",
        "skill": 60,
        "frequency": 81,
        "enjoyment": 55,
        "description": "I like cooking but only if I feel like I have the time. Which I often don't!"
    },
    {
      "activity": "Rock Climbing",
        "skill": 50,
        "frequency": 50,
        "enjoyment": 75,
        "description": "Mainly in the rock gym."
    }
  ],
  "year2010": [
    {
        "activity": "Running/Fitness",
        "skill": 60,
        "frequency": 80,
        "enjoyment": 70,
        "description": "Running, biking, going to the gym, that sort of thing."
    },
    {
      "activity": "Front-end Dev",
        "skill": 45,
        "frequency": 65,
        "enjoyment": 75,
        "description": "I'm taking this course, but already have a good deal of experience."
    },
    {
      "activity": "Travel/Adventure",
        "skill": 60,
        "frequency": 10,
        "enjoyment": 79,
        "description": "I love traveling, hiking, exploring new places."
    },
    {
      "activity": "Backend Dev",
        "skill": 10,
        "frequency": 10,
        "enjoyment": 40,
        "description": "Just learning some php at this point."
    },
    {
      "activity": "Guitar",
        "skill": 30,
        "frequency": 65,
        "enjoyment": 70,
        "description": "I've played since I was a kid and have gone through phases of doing it more or less."
    },
    {
      "activity": "Cooking",
        "skill": 50,
        "frequency": 55,
        "enjoyment": 45,
        "description": "I like cooking but only if I feel like I have the time. Which I often don't!"
    },
    {
      "activity": "Rock Climbing",
        "skill": 40,
        "frequency": 40,
        "enjoyment": 65,
        "description": "Mainly in the rock gym."
    }
  ],
  "year2005": [
    {
        "activity": "Running/Fitness",
        "skill": 60,
        "frequency": 70,
        "enjoyment": 70,
        "description": "Running, biking, going to the gym, that sort of thing."
    },
    {
      "activity": "Front-end Dev",
        "skill": 35,
        "frequency": 45,
        "enjoyment": 65,
        "description": "I'm taking this course, but already have a good deal of experience."
    },
    {
      "activity": "Travel/Adventure",
        "skill": 60,
        "frequency": 10,
        "enjoyment": 89,
        "description": "I love traveling, hiking, exploring new places."
    },
    {
      "activity": "Backend Dev",
        "skill": 10,
        "frequency": 10,
        "enjoyment": 30,
        "description": "Just learning some php at this point."
    },
    {
      "activity": "Guitar",
        "skill": 35,
        "frequency": 77,
        "enjoyment": 85,
        "description": "I've played since I was a kid and have gone through phases of doing it more or less."
    },
    {
      "activity": "Cooking",
        "skill": 35,
        "frequency": 35,
        "enjoyment": 25,
        "description": "I like cooking but only if I feel like I have the time. Which I often don't!"
    },
    {
      "activity": "Rock Climbing",
        "skill": 20,
        "frequency": 20,
        "enjoyment": 35,
        "description": "Mainly in the rock gym."
    }
  ]
}


function bubbleChart( specs ) {

  var chart = {};

  // private variables
  var _svg,
      _bodyG,
      _data,
      _currentYear,
      _xScale,
      _yScale,
      _rScale,
      _toolTip,
      _legend;

  var _colors = d3.scale.ordinal()
        .range(['#f1532f',
                '#00589f',
                '#36793b',
                '#b12824',
                '#533909',
                '#572d85',
                '#ecab00']);

  var _chartWidth = specs.width || 500,
      _chartHeight = specs.height || 250,
      _chartMargin = specs.margin || 30;


  // Public methods

  chart.render = function() {
    if (!_svg) {
      _svg = d3.select("#svg-container")
        .append("svg")
          .attr("id", "main-svg")
          .attr("height", _chartHeight)
          .attr("width", _chartWidth);

      _renderAxes();
      _defineBodyClip();

    }

   _renderBody();
   _makeLegend();

  };

  chart.loadJSONData = function(year){

    // Cache year in case we need to re-render the chart
    // based on a screen resize event.
    _currentYear = year === undefined ? '2015': year;
    _data = jsonData['year' + _currentYear];
    chart.render();

    if (!_toolTip){
      _makeToolTip();
    }

    return chart;

  };

  chart.loadData = function(year){
    // Cache year in case we need to re-render the chart
    // based on a screen resize event.
    _currentYear = year === undefined ? '2015': year;

    //var file = 'data/bubbles-data-' + _currentYear + '.csv';
    d3.csv( file , function(error, data) {

      if (error) {
        console.log(error);
      } else {
        _data = data;
        chart.render();

        if (!_toolTip){
          _makeToolTip();
        }

      }

    });

    return chart;

  };

  chart.x = function (x) {
    if (!arguments.length) {
      return _xScale;
    }
    _xScale = x;
    return chart;
  };

  chart.y = function (y) {
    if (!arguments.length) {
      return _yScale;
    }
    _yScale = y;
    return chart;
  };

  chart.r = function (r) {
    if (!arguments.length) {
      return rScale;
    }
    _rScale = r;
    return chart;
  };

  chart.hideToolTip = function(){
    _toolTip.transition()
      .style('opacity', 0.0);
  }

  chart.nullify = function(){
    var tt = document.querySelector(".tooltip");
    tt.remove();
    d3.select("#svg-container").html("");
    _svg = _bodyG = _legend = null;
  }

  // Private methods

  function _makeToolTip(){
    _toolTip = d3.select('#dataVis')
      .append('div')
      .attr('class', 'tooltip');
  }

  function _makeLegend(){

    if(!_legend){

      var legendRectSize = 18;
      var legendSpacing = 4;

      var lg = _svg.append("g");

      // Make the legend background
      lg.append("g")
        .append('rect')
        .attr("class", "legend-bg")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 5)
        .attr("width", 175)
        .attr("height", 170);

      _legend = lg.selectAll('.legend')
          .data( _data )
          .enter()
          .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  - (height * (_colors.domain().length - 1));
            var horz = 2 * legendRectSize;
            var vert = i * height + 10;
            return 'translate(' + 10 + ',' + vert + ')';
            });

      lg.selectAll('.legend')
        .append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .style('fill', function(d, i){
            return _colors.range()[i];
          })
          .style('stroke', function(d, i){
            return _colors.range()[i];
          });

      lg.selectAll('.legend')
        .append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', legendRectSize - legendSpacing)
          .text(function(d) { return d.activity; });

    }
  };

  function _renderAxes() {
    var axesG = _svg.append("g")
          .attr("class", "axes");

    // These scales are specific to the axes
    // and aren't the same as scales for the bubbles.
    var xScale = d3.scale.linear()
      .domain([0,100])
      .range([20, _quadrantWidth() - 20]);

    var yScale = d3.scale.linear()
      .domain([0,100])
      .range([_quadrantHeight(), 0]);

    var xAxis = d3.svg.axis()
      .ticks(0)
      .scale(xScale)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .ticks(0)
      .scale(yScale)
      .orient("left");

    /*
     * Draw the x- and y-axes
     */

    axesG.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", function () {
          return "translate(" + _xStart() + "," + _chartHeight/2 + ")";
      })
      .style({ fill: 'none', stroke: '#ccc'})
      .call(xAxis);

    axesG.append("g")
      .attr("class", "axis y-axis")
      .attr("transform", function () {
          return "translate(" + _chartWidth/2 + "," + _yEnd() + ")";
      })
      .style( { fill: 'none', stroke: '#ccc'})
      .call(yAxis);

    /*
     * Draw the x- and y-axes
     */

    axesG.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", _chartWidth)
      .attr("y", _chartHeight/2 + 4)
      .text("High Skill");

    axesG.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "start")
      .attr("x", 0)
      .attr("y", _chartHeight/2 + 4)
      .text("Low Skill");

     axesG.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "middle")
      .attr("x", _chartWidth/2)
      .attr("y", 50)
      .text("High Frequency");

    axesG.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "middle")
      .attr("x", _chartWidth/2)
      .attr("y", _chartHeight - 45)
      .text("Low Frequency");
  }

  function _defineBodyClip() {
    var padding = 0;

    _svg.append("defs")
      .append("clipPath")
      .attr("id", "body-clip")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", _quadrantWidth() + 2 * padding)
      .attr("height", _quadrantHeight());
  }

  function _renderBody() {
    if (!_bodyG){
      _bodyG = _svg.append("g")
        .attr("class", "body")
        .attr("transform", "translate("
                + _xStart()
                + ","
                + _yEnd() + ")")
        .attr("clip-path", "url(#body-clip)");
    }
    _renderBubbles();
  }

  function _showToolTip(d, i){
    var clr = _colors.range()[i];
    _toolTip.transition()
      .style('opacity', 1.0);
    _toolTip.html(function(){
      return "<h5 class='tooltip-heading'>" + d.activity + "</h5> <p class='tooltip-body'>" + d.description + "</p>";
      })
      .style('background-color', clr)
      .style('left', (d3.event.pageX) + 'px')
      .style('top', (d3.event.pageY) + 'px');
  }


  function _renderBubbles() {
    console.log("at render bubbles");
    console.log(_data);
    _bodyG.selectAll(".bubble")
        .data(_data)
        .enter()
        .append("circle")
        .attr("class", "bubble")
        .on("mouseover", _showToolTip);

    _bodyG.selectAll(".bubble")
        .data(_data)
        .style("stroke", function (d, j) {
            return _colors(j);
        })
        .style("fill", function (d, j) {
            return _colors(j);
        })
        .transition()
        .attr("cx", function (d) {
            console.log(d);
            console.log(d.skill);
            return _xScale(d.skill); // <-D
        })
        .attr("cy", function (d) {
            return _yScale(d.frequency); // <-E
        })
        .attr("r", function (d) {
            return _rScale(d.enjoyment); // <-F
        });
  }

  function _xStart() {
    return _chartMargin;
  }

  function _yStart() {
    return _chartHeight - _chartMargin;
  }

  function _xEnd() {
    return _chartWidth - _chartMargin;
  }

  function _yEnd() {
    return _chartMargin;
  }

  function _quadrantWidth() {
    return _chartWidth - 2 * _chartMargin;
  }

  function _quadrantHeight() {
    return _chartHeight - 2 * _chartMargin;
  }

  return chart;
}
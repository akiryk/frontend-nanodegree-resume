function bubbleChart( specs ) {
  var chart = {};

  var chartWidth = specs.width || 500,
      chartHeight = specs.height || 250,
      chartMargin = specs.margin || 30,
      xScale, yScale,
      _data = [],
      _colors = d3.scale.ordinal()
          .range(['#A60F2B',
                  '#648C85',
                  '#B3F2C9',
                  '#528C18',
                  '#C3F25C',
                  '#C9399C']),
      _svg,
      _legend,
      _toolTip,
      _bodyG;

  chart.render = function() {
    if (!_svg) {
      _svg = d3.select("#dataVis").append("svg")
              .attr("id", "main-svg")
              .attr("height", chartHeight)
              .attr("width", chartWidth);

      renderAxes(_svg);

      defineBodyClip(_svg);
    }

    renderBody(_svg);
    renderLegend();

  };

  chart.makeToolTip = function(){
    _toolTip = d3.select('#dataVis')
      .append('div')
      .attr('class', 'tooltip');
  }

  chart.hideToolTip = function(){
    _toolTip.transition()
      .style('opacity', 0.0);
  }

  function renderAxes(svg) {
    var axesG = svg.append("g")
          .attr("class", "axes");

    var xAxis = d3.svg.axis()
      .ticks(0)
      .scale(chart.xScale.range([0, quadrantWidth()]))
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .ticks(0)
      .scale(chart.yScale.range([quadrantHeight(), 0]))
      .orient("left");

    /*
     * Draw the x- and y-axes
     */

    axesG.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", function () {
          return "translate(" + xStart() + "," + chartHeight/2 + ")";
      })
      .style({ fill: 'none', stroke: '#ccc'})
      .call(xAxis);

    axesG.append("g")
      .attr("class", "axis y-axis")
      .attr("transform", function () {
          return "translate(" + chartWidth/2 + "," + yEnd() + ")";
      })
      .style( { fill: 'none', stroke: '#ccc'})
      .call(yAxis);

    /*
     * Draw the x- and y-axes
     */

    axesG.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", chartWidth)
      .attr("y", chartHeight/2 + 4)
      .text("High Skill");

    axesG.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "start")
      .attr("x", 0)
      .attr("y", chartHeight/2 + 4)
      .text("Low Skill");

     axesG.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth/2)
      .attr("y", 50)
      .text("High Frequency");

    axesG.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth/2)
      .attr("y", chartHeight - 45)
      .text("Low Frequency");
  }

  function renderLegend(){

    if (!_legend){

      // make the legend items
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
        .attr("height", 150);
      }

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

  function defineBodyClip(svg) {
    var padding = 0;

    svg.append("defs")
            .append("clipPath")
            .attr("id", "body-clip")
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", quadrantWidth() + 2 * padding)
            .attr("height", quadrantHeight());
  }

  function renderBody(svg) {
    if (!_bodyG){
      _bodyG = svg.append("g")
        .attr("class", "body")
        .attr("transform", "translate("
                + xStart()
                + ","
                + yEnd() + ")")
        .attr("clip-path", "url(#body-clip)");
    }
    renderBubbles();
  }

  function showToolTip(d, i){
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


  function renderBubbles() {
      //_rdx.range([0, 50]);

      _bodyG.selectAll(".bubble")
          .data(_data)
          .enter()
          .append("circle")
          .attr("class", "bubble")
          .on("mouseover", showToolTip);

      /* TODO:
       * I think there are two x and y scales
       * One is for the labels and one is for the bubbles,
       * which have additional margins.
       * Clean this up and make it more self evident
      */
      var xScale = d3.scale.linear()
        .clamp(true)
        .domain([0, 100])
        .range([75,chartWidth-2*chartMargin - 75]);

        console.log("there " + chart.yScale.domain());

       var yScale = d3.scale.linear()
        .clamp(true)
        .domain([0, 100])
        .range([defaults.height - 2*defaults.margin -75, 75]);

        console.log("yscale range: " + yScale.range());
        console.log("chart.yscale range: " + chart.yScale.range());

      var rScale = d3.scale.linear()
        .clamp(true)
        .domain([0,100])
        .range([0,75]);

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
              return xScale(d.skill); // <-D
          })
          .attr("cy", function (d) {
              return yScale(d.frequency); // <-E
          })
          .attr("r", function (d) {
              return rScale(d.enjoyment); // <-F
          });
  }

    function xStart() {
        return chartMargin;
    }

    function yStart() {
        return chartHeight - chartMargin;
    }

    function xEnd() {
        return chartWidth - chartMargin;
    }

    function yEnd() {
        return chartMargin;
    }

    function quadrantWidth() {
        return chartWidth - 2 * chartMargin;
    }

    function quadrantHeight() {
        return chartHeight - 2 * chartMargin;
    }

    chart.width = function (w) {
        if (!arguments.length) return chartWidth;
        chartWidth = w;
        return chart;
    };

    chart.height = function (h) {
        if (!arguments.length) return chartHeight;
        chartHeight = h;
        return chart;
    };

    chart.margin = function (m) {
        if (!arguments.length) return chartMargin;
        chartMargin = m;
        return chart;
    };

    chart.colors = function (c) {
        if (!arguments.length) return _colors;
        _colors = c;
        return chart;
    };

    chart.x = function (x) {
        if (!arguments.length) return xScale;
        chart.xScale = x;
        return chart;
    };

    chart.y = function (y) {
        if (!arguments.length) return yScale;
        chart.yScale = y;
        return chart;
    };

    // chart.r = function (r) {
    //     if (!arguments.length) return _rdx;
    //     _rdx = r;
    //     return chart;
    // };

    chart.loadData = function(year){

      var file = 'data/bubbles-data-' + year + '.csv';
      d3.csv( file , function(error, data) {

        if (error) {  //If error is not null, something went wrong.
          //Log the error.
          console.log(error);
        } else { // No error
          //Include other code to execute after successful file load here
          _data = [];
          _data = data.slice();
          skillsAndChanges.render();

          if (!_toolTip){
            skillsAndChanges.makeToolTip();
          }

        }

      });
    }

    return chart;
}

function udpateYearLabel(year){
  console.log(year);
  console.log(document.getElementById('year-label'));
  document.getElementById('year-label').textContent = year;
}

var toggle = true;

var defaults = {
    width: 900,
    height: 500,
    margin: 70
}

var skillsAndChanges = bubbleChart( defaults )
        // pass chart.x a scaling function.
        .x(d3.scale.linear()
            .domain([0, 100])
            .clamp(true)
            .range([75,defaults.width-2*defaults.margin - 75]))
        // pass chart.y a scaling function.
        .y(d3.scale.linear()
            .domain([0, 100])
            .clamp(true)
            .range([defaults.height - 2*defaults.margin -75, 75]));

skillsAndChanges.loadData(2015);

var slider = document.getElementById('slider')

slider.addEventListener('change', sliderChange);

function sliderChange(e){
  var year = e.target.value;
    skillsAndChanges.loadData(year);
    udpateYearLabel(year);
    skillsAndChanges.hideToolTip();
}
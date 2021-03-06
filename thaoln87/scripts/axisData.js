/**
 * Created by lnthao on 4/3/2017.
 */
var myApp = angular.module("myApp", []);
myApp.directive("elasticCircleChart", function() {
    function link(scope, el, attr){
        var data = scope.data;

        var w = window.innerWidth;
        var h = window.innerHeight;
        var margin = {top: 40, right: 20, bottom: 20, left: 40};
        var radius = 6;

        var svg = d3.select(el[0]).append("svg")
            .attr("width", w)
            .attr("height", h);

        var xScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {return d.x}) + 10])
            .range([margin.left, w - margin.right]);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) {return d.y}) + 10])
            .range([margin.top, h - margin.bottom]);

// define x-axis with scale
        var xAxis = d3.axisTop(xScale);
        // set tick values by data
        //.tickValues(data.map(function(d) {return d.x;}));
// define y-axis with scale
        var yAxis = d3.axisLeft(yScale).tickPadding(10);

        var circleInitialAttrs = {
            cx: xScale(0),
            cy: yScale(0),
            r: 1
        };

        var circleAttrs = {
            cx: function(d) { return xScale(d.x); },
            cy: function(d) { return yScale(d.y); },
            r: radius
        };

        var xAxisGroup = svg.append("g").attr("class", "axis")
            .attr("transform", "translate("+ [0, margin.top] +")") // move x a margin.top distance
            .call(xAxis);

        var yAxisGroup = svg.append("g").attr("class", "axis")
            .attr("transform", "translate("+ [margin.left, 0] +")")
            .call(yAxis);

        var handleMouseOut = function(d, i) {
            d3.select(this).attr("fill", "black")
                .attr("r", radius);
            d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();
        };

        var handleMouseOver = function(d, i) {
            d3.select(this).attr("fill", "orange")
                .attr("r", radius * 2);
            svg.append("text")
                .attr("id", function(){
                    return "t" + d.x + "-" + d.y + "-" + i;
                })
                .attr("x", function(){
                    return xScale(d.x) - 30;
                })
                .attr("y", function(){
                    return yScale(d.y) - 15;
                })
                .text(function(){
                    return [d.x, d.y];
                });

        };

        var circles = svg.selectAll("circle").data(data)
            .enter()
            .append("circle")
            .attrs(circleInitialAttrs)
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);

        circles.transition()
            .delay(function(d, i){
                return i * 100;
            })
            .duration(1500)
            .ease(d3.easeElastic)
            .attrs(circleAttrs);

        svg.on("click", function(){
            var coords = d3.mouse(this);
            var newData = {
                // get value from x-coordinate data (reverse scale)
                x: Math.round(xScale.invert(coords[0])),
                y: Math.round(yScale.invert(coords[1]))
            };
            data.push(newData);

            // change scales
            xScale.domain([0, d3.max(data, function(d) { return d.x; }) + 10]);
            yScale.domain([0, d3.max(data, function(d) { return d.y; }) + 10]);

            // moving axises
            xAxisGroup.transition().call(xAxis);
            yAxisGroup.transition().call(yAxis);

            // move all old circles to coordinates with new axis
            svg.selectAll("circle").data(data).transition().duration(1500)
                .ease(d3.easeElastic)
                .attrs(circleAttrs);

            // update new circles
            var c = svg.selectAll("circle").data(data).enter()
                .append("circle")
                .attrs(circleInitialAttrs)
                .on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut);

            c.transition()
                .duration(1500)
                .ease(d3.easeElastic)
                .attrs(circleAttrs);
        });
    }
    return {
        link: link,
        restict: 'E',
        scope: { data: '=' }
    };

});


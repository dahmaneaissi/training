(function(){
    
    
function random(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


// setup

var tlexplosion = new TimelineMax(),
    container = $(".dzair"),
    html = "",
    isMobile = !!("ontouchstart" in window),
    dotsCount = isMobile ? 5 : 10;

for (var i = 0; i < dotsCount; i++) {
    html += "<div></div>";
}

var dots = $(html).appendTo(container);


// animation

dots.each(function() {
    tlexplosion.add(TweenMax.fromTo(this, 5, {
        left: random(255,265) ,
        top: random(100,115) ,
        z: random(-700,700),
        backgroundColor:"#b05089",
        opacity: Math.random()
    }, {
        left: "+=" + random(-60,60) + "%",
        top: "+=" + random(-66,66) + "%",
        z: "+=" + random(-725,600),
        backgroundColor:"#ecd014",
        opacity: 0

    }), 0);
});
    
})();
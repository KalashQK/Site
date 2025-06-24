var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight / 2;
var animData = {
	container: document.getElementById('lottie-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://github.com/KalashQK/Site/raw/refs/heads/master/lottie.json'
};
var anim = bodymovin.loadAnimation(animData);

$( window ).scroll(function() {
	animatebodymovin(animDuration, anim);
});

function animatebodymovin(duration, animObject) {
	
	var scrollPosition = theWindow.scrollTop();
	var maxFrames = animObject.totalFrames;
	var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
	
	animObject.goToAndStop(frame, true);
	
}

anim.addEventListener("enterFrame", function (animation) {
     if (animation.currentTime > (anim.totalFrames - 1)) {
         animObject.pause();
        //anim.pause();
     }
});

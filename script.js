// scroll down to page
$(".header-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#main").offset().top},
        'slow');
});
/////////////////////////////////////////////
/////////////////////////////////////////////


// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) 
        $("#backToTop").fadeIn();
    else
        $("#backToTop").fadeOut();
});

$("#backToTop").click(function() {
  $("html, body").animate({scrollTop: 10}, 800);
  return false;
});
/////////////////////////////////////////////
/////////////////////////////////////////////


// waveform script
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    hideScrollbar: true
});

var microphone = Object.create(WaveSurfer.Microphone);

microphone.init({
    wavesurfer: wavesurfer
});

microphone.on('deviceReady', function(stream) {
    console.log('Device ready!', stream);
});
microphone.on('deviceError', function(code) {
    console.warn('Device error: ' + code);
});

// pause rendering
//microphone.pause();

// resume rendering
//microphone.play();

// stop visualization and disconnect microphone
//microphone.stopDevice();

// same as stopDevice() but also clears the wavesurfer canvas
//microphone.stop();

// destroy the plugin
//microphone.destroy();
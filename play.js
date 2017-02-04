$(document).ready(function() {

	var question_number;
	var selected_level;
	var selected_lang;
	var max_questions = 5;
	var solved = false;
	var width = 0;

	$('#previous').prop('disabled', true);
	$('#submit').prop('disabled', true);
	$('#record').prop('disabled', true);
	$('#stop').prop('disabled', true);

	// update game screen
	$("#start").on("click", function() {
		// console.log("Game started...");		// debug
		$("#game-settings").fadeOut('fast', function() {
			$("#game").fadeIn("fast");
		});

		$("#start").fadeOut('fast', function() {
			$("#game-nav").fadeIn("fast");
		});

		question_number = 0;
		$("#question-number").text(question_number);

		selected_level = $('input[name=level]:checked').val();
		$("#lang-level").text(selected_level);
		// selected_lang = $('input[name=lang]:checked').val();
		// $("#lang").text(selected_lang);
	});

	var easy = {

		"\u1ECDl\u00E1"                  : "Wealth",
		"\u1ECDla"                       : "Tomorrow",
		"\u00F2j\u00F2"                  : "Rain",
		"\u1ECDj\u1ECD\u0301"            : "Day",
		"\u00F2g\u00F9n"                 : "Medicine",
		"ogun"                           : "War",
		"ow\u00F3"                       : "Money",
		"\u1ECDw\u1ECD\u0301"            : "Hand",
		"aj\u00E1"                       : "Dog",
		"ab\u00E0"                       : "Barn",
		"ape\u0323\u0300re\u0323\u0300"  : "Basket",
		"\u00ECs\u0323\u00F3"            : "Nail",
		"ata"                            : "Pepper",
		"san-w\u00F3"                    : "Pay",
		"b\u00F3y\u00E1"                 : "Perhaps",
		"\u00E8\u00E9b\u00FA"            : "abuse",
		"o\u0323\u0300g\u00E1"           : "Master",
		"f\u00EDf\u1ECD\u0301"           : "Ache",
		"\u1EB9\u0300b\u00F9n"           : "Award/Gift"

	};

	var medium = {

		"\u1EB9nik\u00E9ni"                      :	"Anybody",
		"\u00ECfarah\u00E0n"                     :	"Appearance",
		"\u00ECjiy\u00E0n"                       :	"Argument",
		"ab\u00EDy\u00E1"                        :	"Armpit",
		"y\u00EDk\u00E1kiri"                     :	"Move around",
		"\u00ECgberaga"                          :	"Arrogance/pride",
		"agb\u1EB9j\u1ECD\u0301r\u00F2"          :	"Attorney",
		"\u00E0l\u00E1f\u00ED\u00E0"             :	"Good Health",
		"d\u00E1r\u00EDj\u00EC"                  :	"Pardon",
		"\u00F2g\u00F2n\u0300g\u00F2"            :	"Ostrich",
		"gbo\u0323\u0301r\u00E0n"                :	"Listen/Obey",
		"\u00ECs\u0323e\u0323le\u0323\u0300"     :	"Occurrence",
		"\u00ECto\u0323\u0301j\u00FA"            :	"Care/Maintenance",
		"\u1EB9l\u00F2m\u00EDr\u00E0n"           :	"Someone else",
		"g\u00FAg\u00FAr\u00FA"                  :	"Popcorn",
		"al\u00E1gb\u00E1ra"                     :	"Powerful person",
		"\u1ECDm\u1ECDd\u00E9"                   :	"Child",
		"\u1ECCgb\u1ECD\u0301n"                  :	"Wisdom",
		"p\u00E1t\u00E1p\u00E1t\u00E1"           :	"Absolutely",
		"pol\u00F3w\u00F3"                       :	"Advertise",
		"a\u0301nge\u0323\u0301li\u0300"         :	"Angel"

	};

	var hard = {

		"ol\u00F9r\u00E0nl\u1ECD\u0301w\u1ECD\u0301" 														    : "Aide",
		"ol\u00F3d\u00F9mar\u00E8" 														                      : "Almighty",
		"\u00ECd\u00E1r\u00EDj\u00EC \u00ECj\u1ECDba f\u00FAn \u00E0w\u1ECDn ti o"  : "Amnesty",
		"\u1E63\u1EB9\u0300 n\u00ED \u00ECl\u00FA"        										      : "Anonymous",
		"l\u00E1\u00ECl\u00F3r\u00FAk\u1ECD"            										        : "Archer",
		"\u00ECfet\u00EDs\u00EDl\u1EB9\u0300"                                       : "Attention",
		"\u00ECd\u00E1nil\u00F3j\u00FA"                                             : "Assurance",
		"\u1ECD\u0300g\u1EB9\u0300d\u1EB9\u0300 w\u1EB9r\u1EB9"                     : "Banana",
		"aj\u1EB9nirun-l\u00E1\u00ECd\u00E1w\u00F3"                                 : "Leech",
		"\u00F2\u00F3r\u00F9n\u00A0d\u00EDd\u00F9n"                                 : "Perfume",
		"\u00F2k\u00FAta we\u0323\u0301re\u0323\u0301"                              : "Pebbles",
		"s\u00F9\u00FAr\u00F9"                                                      : "Patience",
		"\u00E8l\u00F2 \u00ECd\u00ECm\u00FA \u00ECw\u00E9"                          : "Paperclip",
		"le\u0323\u0301e\u0323\u0300ko\u0323\u0300o\u0323\u0300kan"                 : "Occasionally",
		"\u00E0l\u00F9bo\u0323\u0301s\u00E0"                                        : "Onions",
		"\u00ECk\u00F3jo\u0323po\u0323\u0300"                                       : "Accumulation",
		"\u00ECy\u00F3k\u00F9"                                                      : "Remainder",
		"il\u00E9 \u00ECpamo\u0323\u0301 ow\u00F3 "                                 : "Bank",
		"dale\u0323\u0301bi"                                                        : "Blame",
		"\u00E0fo\u0323wo\u0323\u0301s\u0323e"                                      : "Manual",
		"j\u00E0g\u00EDd\u00ED-j\u00E0gan"                                          : "Militant/Fighter",
		"\u00E8d\u00E8k\u00F2y\u00E9d\u00E8"                                        : "Misunderstanding",
		"\u00ECj\u00E1 nkan gb\u00E0 n\u00EDtip\u00E1tip\u00E1 "                    : "Mugging",
		"on\u00EDgb\u00E8j\u00E0"                                                   : "Ally"

	};

	$("#record").click(function() {
		solved = true;
	});

	$('#next').click(function() {
		// if(solved==false) {}
		// else {
			var txt;
			question_number++;

			// if($('input[name=lang]:checked').val() === "yoruba") {
			// }

			switch(selected_level)
			{
				case "easy":
					txt = getWord(easy);
					break;
				case "medium":
					txt = getWord(medium);
					break;
				case "hard":
					txt = getWord(hard);
					break;
				default:
					txt = getMixed();
			}

			$("#question-word").html(txt);
			$("#question-number").text(question_number);

			if (question_number == max_questions) {
				$('#next').prop('disabled', true);
				$('#submit').prop('disabled', false);
			}
			$('#previous').prop('disabled', false);
			$('#record').prop('disabled', false);
			$('#stop').prop('disabled', false);
		// }
	});

	$('#previous').click(function() {
		if(question_number == 1)
			$('#previous').prop('disabled', true);

		question_number--;

	});

	$('#submit').on('click', function() {
		// console.log("Submitting...");
		$("#game").fadeOut('fast', function() {
			$("#submitting").fadeIn("fast");
		});
		$("#game-nav").fadeOut('fast', function() {
			$("#submit-message").fadeIn("fast");
		});	

		var id = setInterval(makeProgress, 45);	

		function makeProgress() {
			if(width == 150) {
				clearInterval(id);
				launchResults();
			} else {
				width++;
				document.getElementById("actual-bar").style.width = width+"%";
			}
		}

		function launchResults() {
			$("#question-modal").modal('hide');
			$("#result-modal").modal('show');
		}

	});

	function getWord(level)
	{
		var rand = Math.floor(Math.random()*Object.keys(level).length);
		var count = 0;
		var result;

		for(var key in level) {
			if(count == rand){
				result = key;
				break;
			}
			count++;
		}
		return result;
	}

	var mxd = 1;

	function getMixed()
	{
		var word;

		if (mxd == 1 || mxd == 2)
			word = getWord(easy);
		else if (mxd == 3 || mxd == 4)
			word = getWord(medium);
		else if (mxd == 5)
			word = getWord(hard);

		mxd++;
		return word;
	}

	// reset game content on modal exit
	$("#question-modal").on("hidden.bs.modal", function() {
		
		$("#question-word").html("Click <strong><i>Next</i></strong> to begin!");

		$("#game").hide();
		$("#game-settings").show();
		$("#game-nav").hide();
		$("#start").show();


		question_number = 0;
		$('#next').prop('disabled', false);
		$('#previous').prop('disabled', true);
		$('#submit').prop('disabled', true);
		$('#record').prop('disabled', true);
		$('#stop').prop('disabled', true);

		$("#submitting").css('display', "none");
		$("#submit-message").css('display', "none");
		width = 0;

		microphone.stop();

	});

	/*function disableButtons() {
		$("#next, #previous").prop("disabled", false);
		if (question_number == max_questions) {
			$('#next').prop('disabled', true);
		}
		else if (question_number == 1) {
			$('#previous').prop('disabled', true);
		}
	}*/


});


/** display lang and lvl somewhere on modal */
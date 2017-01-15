$(document).ready(function() {

	// $('#previous, #next').click(function() {
		
	$('#next').click(function() {
		var txt;

		// if($('input[name=lang]:checked').val() === "yoruba") {
		// 	// console.log("yoruba");
		// 	if($('input[name=level]:checked').val() === "easy") {
		// 		// console.log("easy");
		// 		txt = getWord("easy");
		// 		console.log(txt.concat("\teasy"));
		// 	}
		// 	else if($('input[name=level]:checked').val() === "medium") {
		// 		// console.log("easy");
		// 		txt = getWord("medium");
		// 		console.log(txt.concat("\tmedium"));
		// 	}
		// 	else if($('input[name=level]:checked').val() === "hard") {
		// 		txt = getWord("hard");
		// 		console.log(txt.concat("\thard"));
		// 	}
		// 	else {	// mixed
		// 		txt = getWord("hard");
		// 		console.log(txt.concat("\thard"));
		// 	}
		// }

		switch($('input[name=level]:checked').val())
		{
			case "easy":
				txt = getWord("easy");
				break;
			case "medium":
				txt = getWord("medium");
				break;
			case "hard":
				txt = getWord("hard");
				break;
			default:
				txt = getWord("mixed");
		}

		$("#question-word").html(txt);

	});

	var easy = {

		"ọlá"    : "Wealth",
		"ọla"    : "Tomorrow",
		"òjò"    : "Rain",
		"ọjọ"    : "Day",
		"ògùn"   : "Medicine",
		"ogun"   : "War",
		"owó"    : "Money",
		"ọwọ"    : "Hand",
		"ajá"    : "Dog",
		"abà"    : "Barn",
		"apere"  : "Basket",
		"ìsó"    : "Nail",
		"ata"    : "Pepper",
		"san-wó" : "Pay",
		"bóyá"   : "Perhaps",
		"èébú"   : "abuse",
		"ogá"    : "Master",
		"fífọ"   : "Ache",
		"ẹbùn"   : "Award/Gift"

	};

	var medium = {

		"ẹnikéni"  :	"Anybody",
		"ìfarahàn" :	"Appearance",
		"ìjiyàn"   :	"Argument",
		"abíyá"    :	"Armpit",
		"yíkákiri" :	"Move around",
		"ìgberaga" :	"Arrogance/pride",
		"agbẹjọrò" :	"Attorney",
		"àláfíà"   :	"Good Health",
		"dáríjì"   :	"Pardon",
		"ògòngò"   :	"Ostrich",
		"gboràn"   :	"Listen/Obey",
		"ìsele"    :	"Occurrence",
		"ìtojú"    :	"Care/Maintenance",
		"ẹlòmíràn" :	"someone else",
		"gúgúrú"   :	"popcorn",
		"alágbára" :	"Powerful person",
		"ọmọdé"    :	"Child",
		"Ọgbọn"    :	"Wisdom",
		"pátápátá" :	"absolutely",
		"polówó"   :	"advertise",
		"angeli"   :	"Angel"

	};

	var hard = {

		"olùrànlọwọ" 														: "Aide",
		"olódùmarè" 														: "Almighty",
		"ìdáríjì ìjọba fún àwọn ti o ṣẹ ní ìlú" : "Amnesty",
		"láìlórúkọ"        										  : "Anonymous",
		"ọlọfà"            										  : "Archer",
		"ìfetísílẹ"                             : "Attention",
		"ìdánilójú"                             : "Assurance",
		"ọgẹdẹ wẹrẹ"                            : "Banana",
		"ajẹnirun-láìdáwó"                      : "Leech",
		"òórùn dídùn"                           : "Perfume",
		"òkúta were"                            : "Pebbles",
		"sùúrù"                                 : "Patience",
		"èlò ìdìmú ìwé"                         : "Paperclip",
		"leekookan"                             : "Occasionally",
		"àlùbosà"                               : "Onions",
		"ìkójopo"                               : "Accumulation",
		"ìyókù"                                 : "Remainder",
		"ilé ìpamo owó"                         : "Bank",
		"dalebi"                                : "Blame",
		"àfowose"                               : "Manual",
		"jàgídí-jàgan"                          : "Militant/Fighter",
		"èdèkòyédè"                             : "Misunderstanding",
		"ìjá nkan gbà nítipátipá"               : "Mugging",
		"onígbèjà"                              : "Ally"

	};

	function getWord(level)
	{

		var rand = Math.floor(Math.random()*Object.keys(easy).length);

		if(level === "easy") {
			var count = 0;
			var result;
			for(var key in easy) {
				if(count == rand){
					result = key;
					break;
				}
				count++;
			}
			return result;
		}

		else if(level == "medium") {
			var count = 0;
			var result;
			for(var key in medium) {
				if(count == rand){
					result = key;
					break;
				}
				count++;
			}
			return result;
		}

		else if(level == "hard") {
			var count = 0;
			var result;
			for(var key in hard) {
				if(count == rand){
					result = key;
					break;
				}
				count++;
			}
			return result;
		}
	}

});
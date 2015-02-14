var bio = {
	"name" : "Michael",
	"role" : ".NET Developer",
	"contacts" : {
		"email" : "Miish84@gmail.com",
		"mobile" : "865-321-7844",
		"gitHub" : "Miish84",
		"location" : "Knoxville, TN"
	},
	"welcomeMessage" : "Welcome to my interactive portfolio!",
	"skills" : ["HTML", "CSS", "Bootstrap", "JSON", "Javascript", "JQuery", "C#", "SQL Server", "SSIS", "Git"],
	"education" : [
		{
			"School" : "Pellissippi State Community College",
		    "Degree" : "Associate's - Database Concentration"
		},
		{
			"School" : "Udacity",
		    "Degree" : "Nanodegree - Front-End Web Developer"
		}
	]
};

var work = { "jobs" : [
	{
		"title" : "Developer",
		"employer" : "PerfectServe",
		"startDate" : "2011-12",
		"endDate" : "Indefinite",
		"location" : "Knoxville, TN",
		"description" : "Worked multiple development roles spanning throughout the entire stack in an AGILE environment."
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Pellissippi",
		"location" : "Knoxville, TN",
		"degree" : "Associates of Science",
		"major" : "Computer Science - Database Concentration"
	},
	{
		"name" : "Udacity",
		"location" : "San Fransisco, California",
		"degree" : "NanoDegree",
		"major" : "Front-End Web Developer"
	}]
};

// Seems like I should have used camelcase for object properties and functions as I am here
var projects = {
	"project" : [
	{
		"title" : "Interactive Resume",
		"startDate" : "2015-01-15",
		"endDate" : "Indefinite",
		"description" : "Interactive Resume to show off my credentials and front-end development skills",
		"images" : ["images/197x148.gif"]
	}],
	"display" : function(index)
	{
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[index].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[index].startDate + " - " + projects.project[index].endDate));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[index].description));
		//
		for (var image in projects.project[index].images)
		{
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[index].images[image]));
		}
	}
};

var authorName = "Michael Ishee";
var authorRole = "Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", authorRole));
$("#header").prepend(HTMLheaderName.replace("%data%", authorName));

if (bio.skills && bio.skills.length >= 1)
{
	$("#header").append(HTMLskillsStart);

	for (s in bio.skills)
	{
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[s]));
	}
}


if (work.jobs.length >= 1)
{
	for (job in work.jobs)
	{
		displayWork();
	}
}


function displayWork()
{
	$("#workExperience").append(HTMLworkStart);
	/* The :last jQuery selector returns the final element in a list that matches whatever precedes it.*/
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].startDate + " - " + work.jobs[job].endDate ));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}

for (var p in projects.project)
{
	projects.display(p);
}

// log mouse location when click
$(document).click(function(loc)
{
	logClicks(loc.pageX, loc.pageY);
});

// Internationalize name e.g. Michael ISHEE
$("#main").append(internationalizeButton);

function inName(name)
{
	var firstAndLast = name.trim().split(" ");
	firstAndLast[0] = firstAndLast[0][0].toUpperCase() + firstAndLast[0].slice(1).toLowerCase();
	firstAndLast[1] = firstAndLast[1].toUpperCase();

	return firstAndLast.join(" ");
}

$("#mapDiv").append(googleMap);
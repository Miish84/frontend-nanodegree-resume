var bio = {
	"name" : "Michael Ishee",
	"role" : "Developer",
	"contacts" : {
		"mobile" : "865-321-7844",
		"email" : "Miish84@gmail.com",		
		"gitHub" : "Miish84",
		"twitter" : "N/A",
		"location" : "Knoxville, TN"
	},
	"welcomeMessage" : "Welcome to my interactive resume!",
	"skills" : ["HTML", "CSS", "Bootstrap", "JSON", "Javascript", "JQuery", "C#", "SQL Server", "SSIS", "Git"],
	"biopic" : "images/me.jpg",
	"display" : function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.gitHub));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);

		for(var s in bio.skills)
		{
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[s]))
		}
	}
};

var education = {
	"schools" : 
	[{
		"name" : "Pellissippi",
		"location" : "Knoxville, TN",
		"degree" : "Associates of Science",
		"majors" : ["Computer Science - Database Concentration"],
		"dates" : 2012,
		"url" : "http://www.pstcc.edu/"
	}],
	"onlineCourses" : 
	[{
		"title" : "Front-End Web Developer",
		"school" : "Udacity",
		"date" : 2015,
		"url" : "http://www.udacity.com"
	}],
	"display" : function() {

	}
};

var work = { 
	"jobs" : 
	[{
		"employer" : "PerfectServe",		
		"title" : "Developer",
		"location" : "Knoxville, TN",		
		"dates" : "2011 - present",
		"description" : "Work multiple software development roles spanning throughout the entire stack in an AGILE environment."
	}],
	"display" : function() {
		$("#workExperience").append(HTMLworkStart);

		for(var j in work.jobs)
		{
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[j].employer) + HTMLworkTitle.replace("%data%", work.jobs[j].title));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[j].location));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[j].dates));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[j].description));
		}
	}
};

// Seems like I should have used camelcase for object properties and functions as I am here
var projects = {
	"projects" : [
	{
		"title" : "Interactive Resume",
		"dates" : "2015-01 - 2015-02",
		"description" : "Interactive Resume to show off my credentials and front-end development skills",
		"images" : ["images/197x148.gif"]
	}],
	"display" : function(index)
	{
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[index].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[index].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[index].description));
		//
		for (var image in projects.projects[index].images)
		{
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[index].images[image]));
		}
	}
};

bio.display();

for (var p in projects.projects)
{
	projects.display(p);
}

work.display();

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
var bio = {
	"Name" : "Michael",
	"Role" : ".NET Developer",
	"Contacts" : {
		"Email" : "Miish84@gmail.com",
		"Mobile" : "865-321-7844",
		"GitHub" : "Miish84",
		"Location" : "Knoxville, TN"
	},
	"WelcomeMessage" : "Welcome to my interactive portfolio!",
	"Skills" : ["HTML", "CSS", "Bootstrap", "JSON", "Javascript", "JQuery", "C#", "SQL Server", "SSIS", "Git"],
	"Education" : [
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
		"Title" : "Developer",
		"Employer" : "PerfectServe",
		"StartDate" : "2011-12",
		"EndDate" : "",
		"Location" : "Knoxville, TN"
	}]
};

var education = {
	"Schools" : [
	{
		"Name" : "Pellissippi",
		"Location" : "Knoxville, TN",
		"Degree" : "Associates of Science",
		"Major" : "Computer Science - Database Concentration"
	},
	{
		"Name" : "Udacity",
		"City" : "Unknown",
		"Degree" : "NanoDegree",
		"Major" : "Front-End Web Developer"
	}]
};

var projects = [
{
	"Title" : "Interactive Resume",
	"StartDate" : "2015-01-15",
	"EndDate" : "",
	"Description" : "Interactive Resume to show off my credentials and front-end development skills",
	"Images" : ["images/me.jpg"]
}
];

/*HTMLheaderName.replace("%data%","Michael"),
HTMLheaderRole.replace("%data%","Developer"),
HTMLwelcomeMsg.replace("%data%", "Welcome to my interactive portfolio!"),
HTMLskills.replace("%data%", ["HTML", "CSS", "Bootstrap", "Javascript", "C#", "SQL Server", "SSIS", "Git"])
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", bio.Work.Employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", bio.Work.Position));

$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", bio.Education[0].School));
$("#education").append(HTMLschoolDegree.replace("%data%", bio.Education[0].Degree));
$("#education").append(HTMLschoolName.replace("%data%", bio.Education[1].School));
$("#education").append(HTMLschoolDegree.replace("%data%", bio.Education[1].Degree));

$("#header").prepend(bio.Role);
$("#header").prepend(bio.Name);
$("#header").append(bio.Welcome);
$("#topContacts").append(bio.Mobile);
$("#topContacts").append(bio.Email);
$("#footerContacts").append(bio.Mobile);
$("#footerContacts").append(bio.Email);
$("#header").prepend(bio.Skills);*/
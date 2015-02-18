var bio = {
	'name' : 'Michael Ishee',
	'role' : 'Developer',
	'contacts' : {
		'mobile' : '865-321-7844',
		'email' : 'Miish84@gmail.com',
		'github' : 'Miish84',
		'twitter' : 'N/A',
		'location' : 'Farragut, TN'
	},
	'welcomeMessage' : 'Welcome to my interactive resume!',
	'skills' : ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'C#', 'SQL Server', 'SSIS', 'Git'],
	'biopic' : 'images/me.jpg',
	'display' : function() {
		$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
		$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
		$('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
		$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
		$('#header').append(HTMLskillsStart);
		$('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
		$('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

		var len = bio.skills.length;

		for(var s = 0; s < len; s++) {
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[s]))
		}
	}
};

var work = {
	'jobs' : [{
		'employer' : 'PerfectServe',
		'title' : 'Developer',
		'location' : '1225 East Weisgarber Road, Knoxville, TN 37909',
		'dates' : '2011 - present',
		'description' : 'Work with multiple technologies in environments throughout the entire stack within an AGILE team.',
		'url' : 'http://www.perfectserve.com'
	}],
	'display' : function() {

		var len = work.jobs.length;

		for(var j = 0; j < len; j++) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[j].employer) + HTMLworkTitle.replace('%data%', work.jobs[j].title));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[j].location));
			$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[j].dates));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[j].description));
			$('.employer-name:last').attr('href', work.jobs[j].url);
		}
	}
};

var projects = {
	'projects' : [{
		'title' : 'Interactive Resume',
		'dates' : '2015-01 - 2015-02',
		'description' : 'Interactive resume to show off my credentials and front-end development skills',
		'images' : ['images/kitten_small_one.jpg', 'images/kitten_small_wide.jpg']
	}],
	'display' : function() {

		var len = projects.projects.length;

		for(var p = 0; p < len; p++) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[p].title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[p].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[p].description));

			var imageLen = projects.projects[p].images.length;

			for(var image = 0; image < imageLen; image++) {
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[p].images[image]));
			}
		}
	}
};

var education = {
	'schools' : [{
		'name' : 'Pellissippi State Community College',
		'location' : 'Knoxville, TN',
		'degree' : 'Associate of Science',
		'majors' : ['Computer Science - Database Concentration'],
		'dates' : 2012,
		'url' : 'http://www.pstcc.edu/'
	}],
	'onlineCourses' : [{
		'title' : 'Front-End Web Developer',
		'school' : 'Udacity',
		'date' : 2015,
		'url' : 'http://www.udacity.com'
	}],
	'display' : function() {

		var schoolLen = education.schools.length;

		for(var s = 0; s < schoolLen; s++) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[s].name) + HTMLschoolDegree.replace('%data%', education.schools[s].degree));
			$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[s].dates));
			$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[s].location));

			var majorsLen = education.schools[s].majors.length;

			for(var m = 0; m < majorsLen; m++) {
				$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[s].majors[m]));
			}
			$('.school-name:last').attr('href', education.schools[s].url);
		}

		var onlineSchoolLen = education.onlineCourses.length;

		for(var os = 0; os < onlineSchoolLen; os++) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineClasses);
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[os].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[os].school));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[os].date));
			$('.education-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[os].url));
			$('.online-title:last').attr('href', education.onlineCourses[os].url);
			$('.online-url:last').attr('href', education.onlineCourses[os].url);
		}
	}
};

bio.display();

projects.display();

work.display();

education.display();

$('#mapDiv').append(googleMap);
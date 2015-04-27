var bio = {
    name: "Oleg Borodai",
    role: "Nanodegree student",
    contacts: {
        mobile: "+49 152 2428 1050",
        email: "borodai.oleg@gmail.com",
        github: "https://github.com/Oleg-Borodai",
        twitter: "twiter.com",
        location: "Hamburg, Germany"
    },
    welcomeMessage: "Welcome message appears here!!!!",
    skills: ["SQL Server Integration Services","SQL Server Analysis Services","SQL Server Reporting Services","HTML/CSS","JavaScript"],
    biopic: "images/fry.jpg",
    display: function(){
        var formatted_name = HTMLheaderName.replace("%data%",this.name);
        $("#header").prepend(formatted_name);

        var formatted_role = HTMLheaderRole.replace("%data%",this.role);
        $("#name").after(formatted_role);

        var formatted_mobile = HTMLmobile.replace("%data%",this.contacts.mobile);
        $("#topContacts, #footerContacts").append(formatted_mobile);

        var formatted_email = HTMLemail.replace("%data%",this.contacts.email);
        $("#topContacts, #footerContacts").append(formatted_email);

        var formatted_twitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
        $("#topContacts, #footerContacts").append(formatted_twitter);

        var formatted_github = HTMLgithub.replace("%data%",this.contacts.github);
        $("#topContacts, #footerContacts").append(formatted_github);

        var formatted_location = HTMLlocation.replace("%data%",this.contacts.location);
        $("#topContacts, #footerContacts").append(formatted_location);

        var formatted_photo = HTMLbioPic.replace("%data%",this.biopic);
        $("#header").append(formatted_photo);

        var formatted_welcome = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
        $("#header").append(formatted_welcome);

        $("#header").append(HTMLskillsStart);

        for(var i=0; i < this.skills.length; i++){
            $("#skills").append(HTMLskills.replace("%data%",this.skills[i]));
        }
    }
};

var work = {
    jobs: [
        {
            employer: "gamigo AG",
            title: "Business Intelligence Developer",
            location: "Hamburg",
            dates: "January 2013 - present",
            description: "gamigo AG, based in Hamburg, Germany is an online games publisher. It focuses on massively multiplayer online role-playing games, licensing games from developers for a North American and European audience. Gamigo has a total of well over 35 million registered game accounts worldwide"
        },
        {
            employer: "FarTop",
            title: "Business Intelligence Developer",
            location: "Dnipropetrovsk",
            dates: "February 2009 - January 2013",
            description: "FarTop, based in Dnipropetrovsk, Ukraine is a chain of pharmacies with over 60 stores in six biggest Ukrainian cities. FarTop has about 500 employees and more than 20000 distinct SKU of products on stores’ shelves"
        },
        {
            employer: "FarTop",
            title: "System Administrator",
            location: "Dnipropetrovsk",
            dates: "September 2007 - February 2009",
            description: "FarTop, based in Dnipropetrovsk, Ukraine is a chain of pharmacies with over 60 stores in six biggest Ukrainian cities. FarTop has about 500 employees and more than 20000 distinct SKU of products on stores’ shelves"
        }
    ],
    display: function(){
        for(var i = 0; i < this.jobs.length; i++){
            $("#workExperience").append(HTMLworkStart);
            var formatted_job = HTMLworkEmployer.replace("%data%", this.jobs[i].employer) +
                HTMLworkTitle.replace("%data%",this.jobs[i].title);
            $(".work-entry:last").append(formatted_job);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%",this.jobs[i].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%",this.jobs[i].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%",this.jobs[i].description));
        }
    }
};

var education = {
    schools: [
        {
            name: "Dnipropetrovsk State University",
            location: "Dnipropetrovsk",
            degree: "Master of Electrical engineering",
            majors: ["string1", "string2", "string3"],
            dates: 1296518400,
            url: "http://www.dnu.dp.ua/"
        },
        {
            name: "Lyceum of Informational Technologies",
            location: "Dnipropetrovsk",
            degree: "Basic education",
            majors: ["string1", "string2", "string3"],
            dates: 1116979200,
            url: "http://www.lit.dp.ua/"
        },
    ],
    onlineCourses: [
        {
            title: "Front-End web developer Nanodegree",
            school: "Udacity",
            date: 1447027200,
            url: "http://udacity.com"
        },
        {
            title: "JavaScript track",
            school: "Codeacademy",
            date: 1337904000,
            url: "http://codeacademy.com"
        }
    ],
    display: function(){
        for(var i = 0; i < this.schools.length; i++){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(
                HTMLschoolName.replace("%data%",this.schools[i].name)+
                HTMLschoolDegree.replace("%data%",this.schools[i].degree)+
                HTMLschoolDates.replace("%data%",new Date(this.schools[i].dates*1000).toLocaleDateString("en-US"))+
                HTMLschoolLocation.replace("%data%",this.schools[i].location));
            for(var j = 0; j < this.schools[i].majors.length; j++){
                $(".education-entry:last").append(
                    HTMLschoolMajor.replace("%data%",this.schools[i].majors[j]));
            }
        }

        $("#education").append(HTMLonlineClasses);
        for(var i = 0; i < this.onlineCourses.length; i++){
            $(".onlineclass:last").append(
                HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title)+
                HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school)+
                HTMLonlineDates.replace("%data%", new Date(this.onlineCourses[i].date*1000).toLocaleDateString("en-US"))+
                HTMLonlineURL.replace("%data%", this.onlineCourses[i].url));
        }
    }
};

var projects = {
    projects: [
        {
            title: "project1",
            dates: "January 2013 - March 2013",
            description: "Project 1 description goes here",
            images: ["images/Project-Image.jpg","images/Project-Image.jpg"]
        },
        {
            title: "project2",
            dates: "January 2014 - March 2015",
            description: "Project 2 description goes here",
            images: ["images/Project-Image.jpg","images/Project-Image.jpg"]
        }
    ],
    display: function(){
        for(var i = 0; i < this.projects.length; i++){
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(
                HTMLprojectTitle.replace("%data%", this.projects[i].title) +
                HTMLprojectDates.replace("%data%", this.projects[i].dates) +
                HTMLprojectDescription.replace("%data%", this.projects[i].description));
            for(var j = 0; j < this.projects[i].images.length; j++){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%",this.projects[i].images[j]));
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	console.log("No websites yet. Creating starter data.");
    	Websites.insert({
    	    title:"Goldsmiths Computing Department", 
    	    url:"http://www.gold.ac.uk/computing/", 
    	    description:"This is where this course was developed.",
            upvotes:0,
    	    downvotes:0,
            votes:0,
    	    createdOn:new Date()
    	});
    	Websites.insert({
    	    title:"University of London", 
    	    url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    	    description:"University of London International Programme.", 
    	    upvotes:0,
            downvotes:0,
            votes:0,
    	    createdOn:new Date()
    	});
    	Websites.insert({
    	    title:"Coursera", 
    	    url:"http://www.coursera.org", 
    	    description:"Universal access to the world’s best education.", 
    	    upvotes:0,
            downvotes:0,
            votes:0,
    	    createdOn:new Date()
    	});
    	Websites.insert({
    	    title:"Google", 
    	    url:"http://www.google.com", 
    	    description:"Popular search engine.", 
    	    upvotes:0,
    	    downvotes:0,
            votes:0,
            createdOn:new Date()
    	});
    }
});

Meteor.publish('allComments', function() {
    return Comments.getAll();
});

Meteor.publish('articleComments', function(docId) {
    return Comments.get(docId);
});

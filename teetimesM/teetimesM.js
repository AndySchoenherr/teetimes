var Times = ["8:00am", "8:30am", "9:00am", "9:30am", "10:30am", "11:00am", "11:30am", "12:00pm",
 "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm", "4:30pm"];

 var holes9 = "$17.00";
 var holes18 = "$25.00";

 
TeeTimes = new Mongo.Collection('times');

TeeTimes.insert({Time: "8:00am"});
TeeTimes.insert({Time: "8:30am"});
TeeTimes.insert({Time: "9:00am"});
TeeTimes.insert({Time: "9:30am"});
TeeTimes.insert({Time: "10:00am"});
TeeTimes.insert({Time: "10:30am"});
TeeTimes.insert({Time: "11:00am"});
TeeTimes.insert({Time: "11:30am"});
TeeTimes.insert({Time: "12:00pm"});
TeeTimes.insert({Time: "12:30pm"});
TeeTimes.insert({Time: "1:00pm"});
TeeTimes.insert({Time: "1:30pm"});
TeeTimes.insert({Time: "2:00pm"});
TeeTimes.insert({Time: "2:30pm"});
TeeTimes.insert({Time: "3:00pm"});
TeeTimes.insert({Time: "3:30pm"});
TeeTimes.insert({Time: "4:00pm"});
TeeTimes.insert({Time: "4:30pm"});
TeeTimes.insert({Time: "5:00pm"});
TeeTimes.insert({Time: "5:30pm"});

Price = new Mongo.Collection('price');

Price.insert({holes9: "17.00"});
Price.insert({holes18: "$25.00"});
	
	



if (Meteor.isClient) {
  Template.teetimepicker.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

  Template.Available.helpers({
  		'time': function(){
  			return TeeTimes.find()
  		}

  });
  


}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

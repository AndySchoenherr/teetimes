if (Meteor.isClient) {
  

  Template.tempName.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

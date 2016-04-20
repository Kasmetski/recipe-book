Template.newRecipe.helpers({
    //add you helpers here
});

Template.newRecipe.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }
});

Template.newRecipe.onCreated(function () {
    //add your statement here
});

Template.newRecipe.onRendered(function () {
    //add your statement here
});

Template.newRecipe.onDestroyed(function () {
    //add your statement here
});


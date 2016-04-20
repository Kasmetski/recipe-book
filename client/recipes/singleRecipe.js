Template.singleRecipe.helpers({
    recipe: function() {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});

Template.singleRecipe.events({
    //add your events here
});

Template.singleRecipe.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.singleRecipe.onRendered(function () {
    //add your statement here
});

Template.singleRecipe.onDestroyed(function () {
    //add your statement here
});


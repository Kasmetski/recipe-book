Template.recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.recipes.helpers({
    recipes: function() {
        return Recipes.find();
    }
});

Template.recipes.events({
    'click .new-recipe': function() {
        Session.set('newRecipe', true);
    },
    'click .glyphicon-trash': function() {
        Session.set('newRecipe', false);
    }
});
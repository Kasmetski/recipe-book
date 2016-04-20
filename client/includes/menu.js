Template.menu.helpers({
    recipes: function() {
        return Recipes.find({inMenu: true});
    }
});

Template.menu.onCreated(function () {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.shoppingList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.shoppingList.helpers({
    shoppingList: function() {
        return Recipes.find({inMenu: true});
    }
});
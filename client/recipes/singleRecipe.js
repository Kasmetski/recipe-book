Template.singleRecipe.helpers({
    recipe: function() {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});

Template.singleRecipe.onCreated(function () {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});
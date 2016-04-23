Template.recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .glyphicon-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .glyphicon-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});

Template.recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.recipe.onCreated(function() {
    this.editMode = new ReactiveVar(false);
});
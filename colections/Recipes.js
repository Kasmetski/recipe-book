Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId) {
        return !!userId;
    },
    update: function(userId) {
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    imageUrl: {
        type: String,
        label: 'ImageURL'
    },
    ingredients: {
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: 'hidden'
        }
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: 'hidden'
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Recipes.attachSchema(RecipeSchema);

Meteor.methods({
    toggleMenuItem: function(id, currentState) {
        Recipes.update(id, {
            $set: {inMenu: !currentState}
        });
    },
    deleteRecipe: function(id) {
        Recipes.remove(id);
    }
});
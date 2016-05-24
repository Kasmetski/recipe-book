if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('/recipe-book');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('homeLayout');
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('homeLayout');
    }
}]);

FlowRouter.route('/', {
    name: 'homeLayout',
    action: function () {
        if (Meteor.userId()) {
            FlowRouter.go('/recipe-book');
        }
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'Recipe Book',
    action: function () {
        BlazeLayout.render('mainLayout', {main: 'recipes'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'Recipe',
    action: function () {
        BlazeLayout.render('mainLayout', {main: 'singleRecipe'});
    }
});

FlowRouter.route('/menu', {
    name: 'Menu',
    action: function() {
        BlazeLayout.render('mainLayout', {main: 'menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'Shopping List',
    action: function() {
        BlazeLayout.render('mainLayout', {main: 'shoppingList'});
    }
});
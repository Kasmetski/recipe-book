FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function() {
        BlazeLayout.render('mainLayout', {main: 'recipes'});
    }
});
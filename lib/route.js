FlowRouter.route('/', {
    name: 'home',
    action: function() {
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function() {
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'recipes'});
    }
});
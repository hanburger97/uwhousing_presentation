

const publicRoute = FlowRouter.group({
  name:'public',
  prefix:'/'
})

publicRoute.route('/', {
  name:'landingPage',
  action: function () {
    BlazeLayout.render('landingLayout', {content: 'landingPage'})
  }
})

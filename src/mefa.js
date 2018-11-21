export default class mefa {
  constructor(frame) {
    this.frames = []
    // 设置frame
    this.frame = frame
    this.subSystems = {}
    this.currentApp = ''
    this.currentRoute = ''
  }

  registerApplication({ app, route, link }) {
    if(!app || !route || !link) return;
    if(!this.currentApp) this.currentApp = app
    if(!this.currentRoute) this.currentRoute = route
    // TODO: 去重复系统和路由
    if(!this.checkDuplicatedApp(app)) {
      this.subSystems[app] = {link, route: [route]}
    } else if(!this.checkDuplicatedRoute(app, route)) {
      const oldRoute = this.subSystems[app].route
      oldRoute.push(route)
    }
  }

  navigateTo({ app, route }) {
    if(this.isInSameSystem(app)) {
      if(!this.isInSamePage(app, route)){
        this.navigateInSystem(app, route)
      }
    }else {
      this.navigateOutSystem(app, route)
    }
  }

  checkDuplicatedApp(app) {
    // true 为重复app
    return this.subSystems.hasOwnProperty(app)
  }

  checkDuplicatedRoute(app, route) {
    // true 为重复route
    return (this.subSystems[app].route.indexOf(route) > -1)
  }

  navigateInSystem(system, name) {
    this.frame.postMessage({route: name}, '*')
  }

  navigateOutSystem(system) {
    const link = this.subSystems[system].link
    this.frame.src = link
  }

  isInSameSystem(system) {
    return this.currentApp && this.currentApp === system;
  }

  isInSamePage(system, page) {
    return this.isInSameSystem(system) && this.currentRoute && this.currentRoute === page
  }

  static onRouteUpdate(cb) {
    window.addEventListener('message', () => {
      cb()
    })
  }
} 
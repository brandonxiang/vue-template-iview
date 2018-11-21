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
    if(this.currentApp) this.currentApp = app
    if(this.currentRoute) this.currentRoute = route
    // TODO: 去重复系统和路由
    if(this.checkDuplicatedApp(app)) {
      this.subSystems[app] = {link, route}
    } else if(this.checkDuplicatedRoute(route)) {
      const oldRoute = this.subSystems[app].route
      oldRoute.push(route)
    }
  }

  navigateTo({ app, route }) {
    if(this.isInSameSystem(app)) {
      if(!this.isInSamePage(app, route)){
        this.navigateInSystem(route)
      }
    }else {
      this.navigateOutSystem(app, route)
    }
  }

  checkDuplicatedApp(app) {
    // true 为没有重复app
    return this.subSystems.hasOwnProperty(app)
  }

  checkDuplicatedRoute(route) {
    // true 为没有重复route
    return this.subSystems[app].route.indexOf(route) > -1
  }

  navigateInSystem(name) {

  }

  navigateOutSystem(system, name) {
    this.subSystems.some((menu) => {
      if (menu.systemName === system) {
        menu.systemPages.some((item) => {
          if (item.pageName === name) {
            this.$refs.subsystem.src = item.link;
            return true;
          }
          return false
        })
        return true;
      }
      return false;
    })
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
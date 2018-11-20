export default class mefa {
  constructor() {
    this.frames = []
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
    if(this.isInSamePage(app)){

    } else 
  }

  checkDuplicatedApp(app) {
    // true 为没有重复app

  }

  checkDuplicatedRoute(route) {
    // true 为没有重复route

  }

  navigateInSystem() {

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
    return this.system && this.system === system;
  }

  isInSamePage(system, page) {
    return this.isInSameSystem(system) && this.page && this.page === page
  }
} 
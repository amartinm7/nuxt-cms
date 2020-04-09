/* eslint-disable camelcase, no-console */
/**
 * benefits:
 * - A declarative dependency resolver
 * - Lazy instantiation
 * - A container that looks just like a regular object
 */
class BeanContainer {
  constructor() {
    this.services = {}
  }

  service(name, callbackFunction) {
    Object.defineProperty(this, name, {
      get: () => {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = callbackFunction(this)
        }
        return this.services[name]
      },
      configurable: true,
      enumerable: true
    })
    return this
  }
}

export default BeanContainer

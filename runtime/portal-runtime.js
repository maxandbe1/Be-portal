
export const PortalRuntime = {
  name: "Bee Portal 🐝",
  modules: {},
  async registerModule(name, path) {
    this.modules[name] = await loadModule(path);
    EventBus.emit("moduleLoaded", name);
  }
};

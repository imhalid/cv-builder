const isOnBrowser = () => {
  if (typeof window !== "undefined") {
    return true;
  }
};

class LS {
  constructor() {
    if (isOnBrowser()) {
      this.ls = window.localStorage;
    } else {
      console.error("Window is not defined");
      return;
    }
  }
  get(key) {
    return JSON.parse(this.ls.getItem(key));
  }
  set({ key, payload }) {
    this.ls.setItem(key, JSON.stringify(payload));
  }
  remove(key) {
    this.ls.removeItem(key);
  }
  clear() {
    this.ls.clear();
  }
}
export default new LS();

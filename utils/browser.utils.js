const isOnBrowser = () =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

class LS {
  getStorage() {
    if (!isOnBrowser()) {
      return null;
    }

    return window.localStorage;
  }

  get(key) {
    const storage = this.getStorage();
    if (!storage) {
      return null;
    }

    const value = storage.getItem(key);
    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  set({ key, payload }) {
    const storage = this.getStorage();
    if (!storage) {
      return;
    }

    storage.setItem(key, JSON.stringify(payload));
  }

  remove(key) {
    const storage = this.getStorage();
    if (!storage) {
      return;
    }

    storage.removeItem(key);
  }

  clear() {
    const storage = this.getStorage();
    if (!storage) {
      return;
    }

    storage.clear();
  }
}

export default new LS();

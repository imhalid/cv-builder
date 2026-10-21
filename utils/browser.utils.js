const getStorage = () => {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
};

// Every method fails soft: storage can be missing (SSR, private mode),
// full (large images) or hold corrupted JSON.
const LS = {
  get(key) {
    try {
      return JSON.parse(getStorage()?.getItem(key) ?? "null");
    } catch {
      return null;
    }
  },
  set({ key, payload }) {
    try {
      getStorage().setItem(key, JSON.stringify(payload));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    getStorage()?.removeItem(key);
  },
  clear() {
    getStorage()?.clear();
  },
};

export default LS;

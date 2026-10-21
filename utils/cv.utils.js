const HEX_COLOR = /^#[0-9a-f]{6}$/i;
const IMAGE_DATA_URL = /^data:image\/(png|jpe?g);base64,/i;

const ITEM_TEMPLATES = {
  projects: { title: "", link: "", summary: "" },
  education: { title: "", school: "", startDate: "", endDate: "" },
  experiences: {
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    summary: "",
  },
};

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const normalizeItem = (item, template) => {
  const next = {};
  Object.keys(template).forEach((key) => {
    next[key] = typeof item[key] === "string" ? item[key] : template[key];
  });
  return next;
};

// Returns a CV that is safe to render: unknown keys are dropped and every
// field falls back to `defaults` when it has the wrong type.
export const normalizeCv = (input, defaults) => {
  const source = isPlainObject(input) ? input : {};
  const cv = {};

  Object.keys(defaults).forEach((key) => {
    const fallback = defaults[key];
    const value = source[key];

    if (ITEM_TEMPLATES[key]) {
      cv[key] = Array.isArray(value)
        ? value
            .filter(isPlainObject)
            .map((item) => normalizeItem(item, ITEM_TEMPLATES[key]))
        : fallback;
    } else if (Array.isArray(fallback)) {
      cv[key] = Array.isArray(value)
        ? value.filter((tag) => typeof tag === "string")
        : fallback;
    } else if (typeof fallback === "boolean") {
      cv[key] = typeof value === "boolean" ? value : fallback;
    } else if (key === "activeColor") {
      cv[key] = HEX_COLOR.test(value) ? value : fallback;
    } else if (key === "image") {
      cv[key] = IMAGE_DATA_URL.test(value) ? value : fallback;
    } else {
      cv[key] = typeof value === "string" ? value : fallback;
    }
  });

  return cv;
};

// Only allow links that are safe to put in an href (no javascript: etc).
export const safeLink = (url) => {
  if (typeof url !== "string") return "";
  const trimmed = url.trim();
  return /^(https?:\/\/|mailto:)/i.test(trimmed) ? trimmed : "";
};

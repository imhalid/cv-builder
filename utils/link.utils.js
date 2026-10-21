import { URL_REGEX } from "../constants/regex.constants.js";

export const websiteLinkCreator = (url) => {
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

export const resolvedWebsiteLink = (link) => {
  try {
    if (link.match(URL_REGEX)) return new URL(link).hostname;
  } catch {
    // fall through while the user is still typing an incomplete address
  }
  return "Invalid Link";
};

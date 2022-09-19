import { URL_REGEX } from "../constants/regex.constants";

export const websiteLinkCreator = (url) => {
  let parsedURL = "";
  if (url.startsWith("http") && url.match(URL_REGEX)) {
    return url;
  }
  const withHTTP = url.startsWith("http://") || url.startsWith("https://");
  const withWWW = url.startsWith("www.");
  if (!withHTTP && withWWW) return parsedURL.concat("https://", url);
  if (!withHTTP && !withWWW) return parsedURL.concat("https://", url);
  return "Invalid Link";
};

export const resolvedWebsiteLink = (link) => {
  let url;
  if (link.match(URL_REGEX)) {
    url = new URL(link);
    return url.hostname;
  }
  return "Invalid Link";
};

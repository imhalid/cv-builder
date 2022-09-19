import { URL_REGEX } from "../constants/regex.constants";

export const websiteLinkCreator = (url) => {
  let parsedURL = "";
  if (url.match(URL_REGEX)) {
    return url;
  }
  const withHTTP = url.startsWith("http://") || url.startsWith("https://");
  const withWWW = url.startsWith("www.");
  console.log(parsedURL.concat("https://", url));
  if (!withHTTP && withWWW) return parsedURL.concat("https://", url);
};

export const resolvedWebsiteLink = (url) => {
  const url = new URL(url);
  console.log(url.host);
};

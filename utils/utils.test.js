import test from "node:test";
import assert from "node:assert/strict";
import { normalizeCv, safeLink } from "./cv.utils.js";
import { websiteLinkCreator, resolvedWebsiteLink } from "./link.utils.js";

const defaults = {
  name: "Sample",
  image: "",
  toolsAndTechSkills: ["a"],
  projects: [{ title: "", link: "", summary: "" }],
  displayImage: false,
  activeColor: "#5B21B6",
};

test("normalizeCv falls back to defaults for non-objects", () => {
  assert.deepEqual(normalizeCv(null, defaults), defaults);
  assert.deepEqual(normalizeCv("text", defaults), defaults);
  assert.deepEqual(normalizeCv([1, 2], defaults), defaults);
});

test("normalizeCv rejects wrong types and unknown keys", () => {
  const cv = normalizeCv(
    {
      name: 42,
      evil: "x",
      toolsAndTechSkills: "oops",
      projects: [null, { title: "ok", link: 5 }],
      displayImage: "yes",
      activeColor: "red",
    },
    defaults
  );
  assert.equal(cv.name, "Sample");
  assert.equal("evil" in cv, false);
  assert.deepEqual(cv.toolsAndTechSkills, ["a"]);
  assert.deepEqual(cv.projects, [{ title: "ok", link: "", summary: "" }]);
  assert.equal(cv.displayImage, false);
  assert.equal(cv.activeColor, "#5B21B6");
});

test("normalizeCv keeps valid values and only inline png/jpeg images", () => {
  const image = "data:image/jpeg;base64,AAAA";
  const cv = normalizeCv(
    { name: "Ada", image, activeColor: "#112233", toolsAndTechSkills: ["x", 1] },
    defaults
  );
  assert.equal(cv.name, "Ada");
  assert.equal(cv.image, image);
  assert.equal(cv.activeColor, "#112233");
  assert.deepEqual(cv.toolsAndTechSkills, ["x"]);
  assert.equal(
    normalizeCv({ image: "https://evil.example/a.png" }, defaults).image,
    ""
  );
});

test("safeLink only allows http(s) and mailto", () => {
  assert.equal(safeLink("https://halid.dev"), "https://halid.dev");
  assert.equal(safeLink("mailto:a@b.co"), "mailto:a@b.co");
  assert.equal(safeLink("javascript:alert(1)"), "");
  assert.equal(safeLink("data:text/html,x"), "");
  assert.equal(safeLink(undefined), "");
});

test("website links never throw while typing", () => {
  assert.equal(websiteLinkCreator("halid.dev"), "https://halid.dev");
  assert.equal(websiteLinkCreator("http://halid.dev"), "http://halid.dev");
  assert.equal(websiteLinkCreator("httpfoo.com"), "https://httpfoo.com");
  assert.equal(resolvedWebsiteLink("https://www.halid.dev/x"), "www.halid.dev");
  assert.equal(resolvedWebsiteLink("https://exa mple.com"), "Invalid Link");
  assert.equal(resolvedWebsiteLink("https://a.b:99999999"), "Invalid Link");
  assert.equal(resolvedWebsiteLink(""), "Invalid Link");
});

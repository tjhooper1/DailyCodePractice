const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function fix(paragraph) {
  if (!paragraph) return "";
  let pArray = paragraph.split(".");
  pArray = pArray.map((p) => p && p.trim());
  pArray = pArray.map((p) => {
    return capitalize(p);
  });
  return pArray.join(". ").trimRight();
}

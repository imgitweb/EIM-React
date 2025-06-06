function letterTrim(text, charLimit) {
  if (!text) return "";

  const trimmed = text.trim();

  if (trimmed.length <= charLimit) return trimmed;

  return trimmed.slice(0, charLimit) + "...";
}
export default letterTrim;

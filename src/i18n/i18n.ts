import no from "./no.json";

const translations = no;

export function getTranslationSync(
  key: string,
  params?: Record<string, string>
): string {
  const keys = key.split(".");
  const value = keys.reduce<unknown>((obj, key) => {
    if (obj && typeof obj === "object" && key in obj && !Array.isArray(obj)) {
      return (obj as Record<string, unknown>)[key];
    }
    return undefined;
  }, translations);

  if (typeof value !== "string") {
    return key;
  }

  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey] || match;
    });
  }

  return value;
}

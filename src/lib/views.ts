const VIEWS_KEY = "blog:views:v1";
const SESSION_KEY = "blog:viewed:v1";

type ViewsMap = Record<string, number>;

const safeParse = (raw: string | null): ViewsMap => {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as ViewsMap;
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch {
    return {};
  }
  return {};
};

const readViews = (): ViewsMap => {
  if (typeof window === "undefined") return {};
  return safeParse(window.localStorage.getItem(VIEWS_KEY));
};

const writeViews = (views: ViewsMap) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
};

const readSession = (): ViewsMap => {
  if (typeof window === "undefined") return {};
  return safeParse(window.sessionStorage.getItem(SESSION_KEY));
};

const writeSession = (views: ViewsMap) => {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(views));
};

export const getViews = (slug: string): number => {
  const views = readViews();
  return views[slug] ?? 0;
};

export const getAllViews = (): ViewsMap => {
  return readViews();
};

export const incrementViews = (slug: string): number => {
  if (typeof window === "undefined") return 0;
  const views = readViews();
  const session = readSession();

  if (session[slug]) {
    return views[slug] ?? 0;
  }

  const nextValue = (views[slug] ?? 0) + 1;
  const nextViews = { ...views, [slug]: nextValue };
  const nextSession = { ...session, [slug]: 1 };
  writeViews(nextViews);
  writeSession(nextSession);
  return nextValue;
};

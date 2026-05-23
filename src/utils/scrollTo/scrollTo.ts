export const scrollTo = (id = "", opts?: { offset: number }) => {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - (opts?.offset || 150);
  window.scrollTo({ top, behavior: "smooth" });
};

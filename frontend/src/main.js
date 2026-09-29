import { getSettings, getPages } from "./api";


async function start() {
  const [settings, page] = await Promise.all([
    getSettings(),
    getPages(location.pathname)
  ]);

  console.log(settings);
  console.log(page);
}
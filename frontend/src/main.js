import { getSetting, getPages } from "./api";


async function start() {
  const [settings, page] = await Promise.all([
    getSetting(),
    getPages(location.pathname)
  ]);

  console.log(settings);
  console.log(page);
}
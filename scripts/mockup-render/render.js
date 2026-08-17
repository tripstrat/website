const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const dir = __dirname;
const outDir = path.join(__dirname, "../../public/images");

const jobs = [
  ["01-includes.html", "plan-simple-includes.png"],
  ["02-route.html", "plan-simple-route.png"],
  ["03-daily.html", "plan-simple-daily.png"],
  ["04-stay.html", "plan-simple-stay.png"],
];

for (const [html, outName] of jobs) {
  const url = `file://${path.join(dir, html)}`;
  const dest = path.join(outDir, outName);
  const result = spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--default-background-color=ffffffff",
      `--window-size=510,765`,
      "--virtual-time-budget=10000",
      `--screenshot=${dest}`,
      url,
    ],
    { encoding: "utf8" },
  );
  console.log(outName, fs.existsSync(dest) ? fs.statSync(dest).size : "MISSING", "status", result.status);
}

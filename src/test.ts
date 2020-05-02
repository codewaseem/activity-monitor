import screenshot from "@senzil/desktop-screenshot";

screenshot("screenshot.png", function(error: string) {
  if (error) console.log("Screenshot failed", error);
  else console.log("Screenshot succeeded");
});

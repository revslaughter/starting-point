var browserSync = require("browser-sync");

browserSync({
  server: {
    proxy: "localhost:3000"
  }
});

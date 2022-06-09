module.exports = {
  apps: [
    {
      script: "index.mjs",
      watch: ["./src/*.mjs", "./index.mjs"],
      name: "express",
    },
    {
      script: "yarn spack",
      watch: ["./views/js"],
      name: "swc",
    },
    {
      script:
        "yarn tailwindcss -i ./views/css/main.css -o ./views/dist/main.css --watch",
      name: "tailwind",
    },
  ],
};

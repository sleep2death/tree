module.exports = {
  apps: [
    {
      script: "index.mjs",
      watch: "./src/*.mjs",
      name: "express",
    },
    {
      script: "yarn spack",
      watch: ["./views/js/*.mjs"],
      name: "swc",
    },
    {
      script:
        "yarn tailwindcss -i ./views/css/main.css -o ./views/dist/main.css --watch",
      name: "tailwind",
    },
  ],
  env_production: {
    NODE_ENV: "production",
  },
  env_development: {
    NODE_ENV: "development",
  },
};

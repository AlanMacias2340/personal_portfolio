module.exports = {
  apps: [
    {
      name: "personal-portfolio",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      max_memory_restart: "512M",
      autorestart: true,
      watch: false,
      max_restarts: 10,
      restart_delay: 5000,

    },
  ],
};

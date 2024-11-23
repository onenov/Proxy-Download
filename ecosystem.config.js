module.exports = {
    apps: [
      {
        name: 'proxy-download-service',
        script: './server.js',
        watch: true,
        instances: 1,
        exec_mode: 'fork',
        autorestart: true,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        }
      }
    ]
  };
const redisConfig = {
  parameters: {
    operation: "set",
    key: "={{$json.message.from.id}}_state",
    value: "={{$json.current_menu}}",
    options: {
      ttl: 3600
    }
  },
  name: "Save User State",
  type: "n8n-nodes-base.redis"
};

module.exports = {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
    tls: process.env.REDIS_TLS === 'true'
  },
  n8n: {
    webhookUrl: process.env.RENDER_EXTERNAL_URL,
    port: process.env.N8N_PORT || 443,
    protocol: 'https'
  }
}; 
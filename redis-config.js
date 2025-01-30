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
FROM ubuntu:22.04

# Встановлюємо необхідні пакети одним шаром
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    python3 \
    python3-pip \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g n8n \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Створюємо користувача для n8n
RUN useradd -ms /bin/bash n8n
USER n8n

# Створюємо директорію для n8n
RUN mkdir -p /home/n8n/.n8n/workflows

# Копіюємо наші воркфлоу
COPY --chown=n8n:n8n n8n/workflows /home/n8n/.n8n/workflows

# Встановлюємо змінні середовища
ENV N8N_PORT=5678 \
    N8N_PROTOCOL=http \
    NODE_ENV=production \
    N8N_EDITOR_BASE_URL=

# Додаємо перевірку здоров'я
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${N8N_PORT}/healthz || exit 1

# Запускаємо n8n
CMD ["n8n", "start"] 
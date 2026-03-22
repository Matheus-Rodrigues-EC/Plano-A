CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    data TIMESTAMP NOT NULL,
    local VARCHAR(150) NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_events_nome ON events(nome);
CREATE INDEX idx_events_data ON events(data);
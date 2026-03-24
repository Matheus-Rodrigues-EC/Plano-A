<p align="center">
  <a href="../README.md">⬅ Voltar ao Início</a>
</p>

## 📚 Projeto Físico do Banco de Dados


### 📋 Tabela: events
A tabela `events` foi criada para armazenar os dados dos eventos cadastrados no sistema.

Campos principais:
- `id `: identificador único do evento
- `nome `: nome do evento
- `data `: data e horário do evento
- `local `: local do evento
- `descricao `: descrição complementar
- `created_at `: data de criação do registro
- `updated_at `: data da última atualização

### Justificativas das escolhas
O campo `id` foi definido como chave primária com auto incremento, garantindo unicidade. Os campos `nome`, `data` e `local` foram definidos como obrigatórios por serem essenciais para o cadastro. O campo `descricao` foi definido como texto livre para permitir maior flexibilidade. Também foram criados índices nos campos `nome` e `data` para melhor organização e possível otimização de consultas.
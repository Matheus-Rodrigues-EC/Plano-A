# Plano-A

## 📜 Descrição do Projeto

O Plano-A é um sistema de gerenciamento de eventos desenvolvido como MVP com o objetivo de permitir o cadastro, listagem, consulta, atualização e remoção de eventos. O projeto foi proposto como atividade avaliativa da disciplina, integrando conteúdos de Programação Orientada a Objetos, Projeto de Banco de Dados e Interface Humano-Computador.

## 🎯 Objetivo do Sistema

O sistema tem como objetivo facilitar o gerenciamento de eventos, permitindo armazenar informações essenciais como nome, data, local e descrição.

## 👨🏻‍💻 Tecnologias Utilizadas

- React
- NestJS
- PostgreSQL
- Prisma
- Whimsical
- GitHub

## 📝 Funcionalidades

- Cadastrar evento
- Listar eventos
- Consultar evento por ID
- Atualizar evento
- Remover evento

## 🧪 Explicação das Classes e Responsabilidades

### 🧾 Event

A classe/entidade `Event` representa o evento dentro do sistema. Ela reúne os dados principais necessários para o gerenciamento, como identificador, nome, data, local e descrição.

### 🧠 EventController

A classe `EventController` é responsável por receber as requisições HTTP e encaminhá-las ao serviço correspondente.

### 🛠 EventService

A classe `EventService` é responsável pelas regras de negócio da aplicação. Nela estão implementadas as operações de criação, listagem, consulta, atualização e remoção dos eventos.

### 🗄 EventRepository

A classe `EventRepository` é responsável pela comunicação do backend com o banco de dados. Nela estão implementadas as chamadas ao banco de criação, listagem, consulta, atualização e remoção dos eventos.

### 🧩 CreateEventDto

O `CreateEventDto` define a estrutura dos dados esperados no cadastro de um evento, ajudando na organização e validação das informações.

### 🧩 UpdateEventDto

O `UpdateEventDto` define os dados permitidos para atualização de um evento existente.

## 📚 Projeto Físico do Banco de Dados

### 📋 Tabela: events

A tabela `events` foi criada para armazenar os dados dos eventos cadastrados no sistema.

Campos principais:

```sql
  `id `: INTEGER / SERIAL, chave primária             | identificador único do evento
  `name `: VARCHAR(150), obrigatório                  | nome do evento
  `date `: TIMESTAMP, obrigatório                     | data e horário do evento
  `local `: VARCHAR(150), obrigatório                 | local do evento
  `description `: TEXT, opcional                      | descrição complementar
  `created_at `: TIMESTAMP, padrão CURRENT_TIMESTAMP  | data de criação do registro
  `updated_at `: TIMESTAMP, atualização automática    | data da última atualização
```

### Justificativas das escolhas

O campo `id` foi definido como chave primária com auto incremento, garantindo unicidade. Os campos `nome`, `data` e `local` foram definidos como obrigatórios por serem essenciais para o cadastro. O campo `descricao` foi definido como texto livre para permitir maior flexibilidade. Também foram criados índices nos campos `nome` e `data` para melhor organização e possível otimização de consultas.

### 📁 Estrutura de pastas

```text
  Plano-A/
  ├── backend/
  ├── frontend/
  ├── database/
  │   └── schema.sql
  ├── wireframe/
  │   ├── sitemap.png
  │   ├── home.png
  │   ├── lista-eventos.png
  │   ├── cadastro-evento.png
  │   └── edicao-evento.png
  └── README.md
```

```text
  backend/
  ├── prisma/
  │   ├── schema.prisma/
  ├── src/
  │   ├── event/
  │   │   ├── dto/
  │   │   │   ├── create-event.dto.ts
  │   │   │   └── update-event.dto.ts
  │   │   ├── entities/
  │   │   │   └── event.entity.ts
  │   │   ├── event.controller.ts
  │   │   ├── event.service.ts
  │   │   ├── event.repository.ts
  │   │   └── event.module.ts
  │   ├── prisma
  │   │   ├── prisma.controller.ts/
  │   │   ├── prisma.service.ts/
  │   │   └── prisma.module.ts
  │   ├── app.module.ts
  │   └── main.ts
  ├── package.json
  └── tsconfig.json
```

| Aqui, a entidade representa o modelo conceitual do sistema, enquanto o Prisma é responsável pelo mapeamento físico.

```text
  frontend/
  ├── src/
  │   ├── components/
  │   │   ├── AppHeader/index.jsx
  │   │   ├── EventCard.jsx/index.jsx
  │   │   ├── EventForm.jsx/index.jsx
  │   │   └── PageContainer.jsx/index.jsx
  │   ├── pages/
  │   │   ├── Home/index.jsx
  │   │   ├── EventsList/index.jsx
  │   │   ├── CreateEvent/index.jsx
  │   │   └── EditEvent/index.jsx
  │   ├── services/
  │   │   └── api.js
  │   ├── routes/
  │   │   └── index.jsx
  │   ├── App.jsx
  │   └── main.jsx
```

## 🗺️ Wireframe e Sitemap

O wireframe foi desenvolvido para representar as principais telas do sistema e o fluxo de navegação entre elas.

### 🎨 Telas desenvolvidas

- Tela inicial
  - ![Home do WireFrame](./wireframe/1%20-%20Home.png)
  - Permite Cadastrar novo evento e Listar Eventos existentes.

- Tela de listagem de eventos
  - ![Listagem de Eventos](./wireframe/2%20-%20Listagem%20de%20Eventos.png)
  - Permite Cadastrar novo evento, Editar evento existente e Remover um evento da lista.

- Tela de cadastro de evento
  - ![Cadastro de Evento](./wireframe/3%20-%20Cadastro%20de%20Evento.png)
  - Permite preencher as informações necessárias, salvar o novo evento ou cancelar a ação.

- Tela de edição de evento
  - ![Edição de Evento](./wireframe/4%20-%20Edição%20de%20Evento.png)
  - Permite editar os campos de um evento já criado, salvar as alterações realizadas ou cancelar as alterações.

### 📚 Fluxo entre as telas

A navegação do sistema começa na tela inicial. A partir dela, o usuário pode acessar a listagem de eventos ou já cadastrar um novo evento. Na tela de listagem, é possível cadastrar um novo evento, editar um evento existente ou remover um evento.

- ![SiteMap do Sistema de Agendamentos](./wireframe/0%20-%20SiteMap.png)

Os arquivos do wireframe e do sitemap estão disponíveis na pasta `wireframe/`.

## 👨🏻‍🏫 Como Executar

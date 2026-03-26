<h1 align="center" fontsize="24px">
  Plano A
</h1>

<div align="center">
<span>
<strong>Organize</strong> fácil. 
</span>
</br>
<span style="justify-content: center">
Transforme <strong>datas</strong> em 
</span>
</br>
<span style="justify-content: center">
momentos <strong>inesquecíveis</strong>.
</span>
</br>
</br>
<span>
Agende e celebre.
</span>
</div>

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
  `id`: INTEGER / SERIAL, chave primária             | identificador único do evento
  `name`: VARCHAR(150), obrigatório                  | nome do evento
  `date`: TIMESTAMP, obrigatório                     | data e horário do evento
  `location`: VARCHAR(150), obrigatório              | local do evento
  `description`: TEXT, opcional                      | descrição complementar
  `created_at`: TIMESTAMP, padrão CURRENT_TIMESTAMP  | data de criação do registro
  `updated_at`: TIMESTAMP, atualização automática    | data da última atualização
```

```sql
  CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    date TIMESTAMP NOT NULL,
    location VARCHAR(150) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Índices
  CREATE INDEX idx_events_name ON events(name);
  CREATE INDEX idx_events_date ON events(date);
```

### Justificativas das escolhas

- O campo `id` foi definido como chave primária com auto incremento, garantindo unicidade.
- Os campos `name`, `date` e `location` foram definidos como obrigatórios por serem essenciais para o cadastro.
- O campo `description` foi definido como texto livre para permitir maior flexibilidade.
- O tipo `TIMESTAMP` foi utilizado para permitir armazenar data e horário do evento, possibilitando maior precisão no agendamento, caso seja necessário.
- O campo description utiliza `TEXT` para permitir maior flexibilidade no tamanho das informações.
- Também foram criados índices nos campos `name` e `date` para melhor organização e possível otimização de consultas.

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
  │   ├── schema.prisma
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

> A entidade representa o modelo conceitual do sistema, enquanto o Prisma é responsável pelo mapeamento físico.

```text
  frontend/
  ├── src/
  │   ├── components/
  │   │   ├── AppHeader/
  │   │   │    └── index.jsx
  │   │   ├── EventCard.jsx/
  │   │   │    └── index.jsx
  │   │   ├── EventForm.jsx/
  │   │   │    └── index.jsx
  │   │   └── PageContainer.jsx/
  │   │   │    └── index.jsx
  │   ├── pages/
  │   │   ├── Home/
  │   │   │    └── index.jsx
  │   │   ├── EventsList/
  │   │   │    └── index.jsx
  │   │   ├── CreateEvent/
  │   │   │    └── index.jsx
  │   │   └── EditEvent/
  │   │   │    └── index.jsx
  │   ├── services/
  │   │   └── api.js
  │   ├── routes/
  │   │   └── index.jsx
  │   ├── App.jsx
  │   └── main.jsx
```

## 🗺️ Wireframe e Sitemap

O wireframe foi projetado com foco em simplicidade e usabilidade, permitindo que o usuário execute as ações principais (CRUD) com o menor número de cliques possível.
A navegação foi centralizada em ações claras como "Cadastrar Evento" e "Listar Eventos", reduzindo a complexidade cognitiva.

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

---

## 👨🏻‍🏫 Como Executar

### 🔧 Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e rodando
- Gerenciador de pacotes (npm ou yarn)

---

### 🗄️ Banco de Dados

1. Crie um banco PostgreSQL
2. Configure o arquivo `.env` no backend:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/plano_a"
```

3. Execute as migrations com Prisma:

```bash
  cd backend
  npx prisma migrate dev
```

---

### 🚀 Backend

```bash
  cd backend
  npm install
  npm run start:dev
```

Servidor disponível em:

```bash
  http://localhost:3000
```

---

### 💻 Frontend

```bash
  cd frontend
  npm install
  npm run dev
```

Aplicação disponível em:

```bash
  http://localhost:5173
```

---

### 🎥 Vídeo Explicativo

O vídeo explicativo do projeto pode ser acessado no link abaixo:

🔗 [Link do vídeo](https://youtu.be/zqzVwyS7yso)

---

## 📌 Considerações Finais

Este projeto foi desenvolvido com foco na aplicação prática dos conceitos de Programação Orientada a Objetos, Banco de Dados e Interface Humano-Computador.

Foram aplicados princípios como separação de responsabilidades, reutilização de componentes e organização em camadas, buscando manter o código limpo, escalável e de fácil manutenção.

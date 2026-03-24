<p align="center">
  <a href="../README.md">⬅ Voltar ao Início</a>
</p>

## 🧪 Explicação das Classes

### 🧾 Event

A classe/entidade `Event` representa o evento dentro do sistema. Ela reúne os dados principais necessários para o gerenciamento, como identificador, nome, data, local e descrição.

### 🧠 EventController

A classe `EventController` é responsável por receber as requisições HTTP e encaminhá-las ao serviço correspondente.

### 🛠 EventService

A classe `EventService` é responsável pelas regras de negócio da aplicação. Nela estão implementadas as operações de criação, listagem, consulta, atualização e remoção dos eventos.

### 🗄 EventRepository

A classe ` EventRepository` é responsável pela comunicação do backend com o banco de dados. Nela estão implementadas as chamadas ao banco de criação, listagem, consulta, atualização e remoção dos eventos.

### 🧩 CreateEventDto

O `CreateEventDto` define a estrutura dos dados esperados no cadastro de um evento, ajudando na organização e validação das informações.

### 🧩 UpdateEventDto

O `UpdateEventDto` define os dados permitidos para atualização de um evento existente.

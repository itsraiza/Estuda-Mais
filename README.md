# 📌 Estuda Mais

## 📖 Descrição

**Estuda Mais** é uma plataforma web inovadora desenvolvida como projeto final de um curso de Inteligência Artificial e Soft Skills. A aplicação utiliza tecnologia de ponta para revolucionar a forma como estudantes se preparam para provas importantes como o ENEM e concursos públicos.

Através de uma interface intuitiva e moderna, o sistema combina algoritmos de inteligência artificial com metodologias educacionais comprovadas para criar experiências de aprendizado personalizadas, organizadas e eficazes. O projeto demonstra como a tecnologia pode ser aliada poderosa na democratização do acesso à educação de qualidade, ajudando estudantes de diferentes níveis a alcançarem seus objetivos acadêmicos com mais eficiência e menos frustração.

## ❗ Problema

Milhões de estudantes brasileiros enfrentam desafios significativos na preparação para exames competitivos como o ENEM e concursos públicos. Os principais obstáculos identificados incluem:

- **Falta de organização**: Muitos estudantes não sabem por onde começar ou como estruturar seus estudos de forma eficiente
- **Ausência de personalização**: Planos de estudo genéricos não consideram o nível individual, tempo disponível ou objetivos específicos de cada aluno
- **Dificuldade em tirar dúvidas**: Quando surge uma dúvida durante os estudos, nem sempre há alguém disponível para explicar de forma clara e acessível
- **Sobrecarga de informação**: Com a abundância de conteúdo online, é difícil filtrar o que é realmente relevante e prioritário
- **Falta de motivação**: Sem um plano claro e progressão visível, muitos desistem antes de verem resultados
- **Dificuldade de adaptação**: Mudanças na rotina ou imprevistos quebram facilmente a disciplina de estudos

Esses problemas resultam em baixo rendimento, frustração e, muitas vezes, abandono dos estudos, perpetuando desigualdades educacionais no país.

## 💡 Solução

O **Estuda Mais** resolve esses desafios através de uma abordagem inteligente e integrada:

- **Planejamento personalizado**: Utiliza IA para gerar planos de estudo sob medida, considerando objetivo, disciplinas, tempo disponível e nível do estudante
- **Suporte inteligente 24/7**: Agente de IA sempre disponível para explicar conceitos, tirar dúvidas e fornecer exemplos práticos
- **Organização estruturada**: Planos organizados por dias da semana com atividades específicas, durações definidas e sugestões de revisão
- **Interface amigável**: Design moderno e responsivo que torna o estudo uma experiência prazerosa e motivadora
- **Acompanhamento progressivo**: Sistema que ajuda a manter a consistência e acompanhar o avanço nos estudos
- **Flexibilidade**: Capacidade de adaptar planos conforme necessidades e imprevistos

A solução não apenas organiza os estudos, mas também cria um ambiente de aprendizado contínuo e motivador, transformando a preparação para exames em uma jornada estruturada e recompensadora.

## 🧠 Tecnologias Utilizadas

### Frontend

- **React 19**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **React Icons** 
- **JavaScript ES6+**

### Backend

- **Node.js**
- **Express.js 5.2**
- **Nodemon**
- **Dotenv**
- **CORS**

### IA/API

- **Google Generative AI (Gemini)**
- **Streaming de Respostas**
- **API RESTful**
- **Prompt Engineering**

## ⚙️ Funcionalidades

### 🎯 Criação de Planos de Estudo Personalizados

- **Formulário inteligente**: Coleta informações sobre objetivo, disciplinas, tempo disponível e nível do estudante
- **Geração automática**: Utiliza IA para criar planos estruturados de segunda a domingo
- **Atividades detalhadas**: Cada dia inclui conteúdos específicos, durações recomendadas e sugestões de revisão
- **Sugestões de vídeos**: Recomendações de conteúdo audiovisual relevante para cada tópico
- **Flexibilidade**: Planos adaptáveis às necessidades individuais de cada estudante

### 💬 Sala de Estudo Inteligente

  - Interface conversacional dinâmica que permite:
  - Tirar dúvidas livremente (chat)
  - Gerar resumos sob demanda
  - Treinar com questões (modo ativo)
  - Enviar respostas e receber correção com explicação

- Sistema com múltiplos modos de interação:
  - Chat livre
  - Resumo
  - Treino + correção

### 📚 Sistema de Resumos e Sínteses

- **Processamento inteligente**: Capacidade de resumir textos longos de forma concisa
- **Organização hierárquica**: Estruturação de informações complexas em tópicos claros
- **Facilitação da revisão**: Transformação de conteúdo extenso em material de estudo prático
- **Personalização**: Adaptação do nível de detalhe conforme preferência do usuário

## ✨ Diferenciais

### 🤖 Integração Avançada de Inteligência Artificial

O uso do Google Gemini representa um salto qualitativo na educação digital:

- **Compreensão contextual**: O modelo entende nuances educacionais e adapta respostas ao contexto brasileiro
- **Geração criativa**: Capacidade de criar planos originais e personalizados, não apenas replicar templates
- **Aprendizado contínuo**: Modelo que evolui e melhora suas respostas com o tempo

### 🎨 Experiência do Usuário Inovadora

- **Design centrado no usuário**: Interface desenvolvida com foco na usabilidade e acessibilidade
- **Responsividade total**: Adaptação perfeita a dispositivos móveis, tablets e desktops
- **Navegação intuitiva**: Fluxos de usuário pensados para minimizar fricção e maximizar eficiência
- **Feedback visual**: Elementos que confirmam ações e orientam o usuário durante a interação

### 📊 Organização e Produtividade

- **Gamificação sutil**: Elementos que tornam o estudo mais envolvente e motivador
- **Acompanhamento de progresso**: Ferramentas para visualizar avanço e manter motivação
- **Flexibilidade inteligente**: Sistema que se adapta a mudanças na rotina do estudante

### 🔒 Segurança e Confiabilidade

- **Gerenciamento seguro de credenciais**: Uso de variáveis de ambiente para proteger chaves de API
- **Validação robusta**: Verificação de dados em múltiplas camadas da aplicação
- **Arquitetura escalável**: Estrutura preparada para crescimento futuro
- **Código limpo e documentado**: Base sólida para manutenção e evolução

## 🧩 Arquitetura

A arquitetura do **Estuda Mais** segue princípios de separação de responsabilidades e comunicação eficiente entre camadas:

```
┌─────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO               │
│                     Frontend - React                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Componentes │ Páginas │ Serviços │ Roteamento  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                           │
                    HTTP/HTTPS (REST API)
                           │
┌─────────────────────────────────────────────────────────┐
│                   CAMADA DE APLICAÇÃO                   │
│                   Backend - Express.js                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Rotas │ Controladores │ Serviços │ Middlewares │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                           │
                    API REQUESTS
                           │
┌─────────────────────────────────────────────────────────┐
│                   CAMADA DE INTELIGÊNCIA               │
│                 Google Gemini API                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Processamento │ Geração │ Streaming │ Contexto │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Fluxo de Dados Detalhado

1. **Interação do Usuário**: O estudante acessa a interface React e interage com formulários ou chat
2. **Requisição HTTP**: O frontend faz uma requisição POST para o endpoint apropriado (/plano ou /estudo)
3. **Processamento no Backend**: O Express.js recebe a requisição, valida os dados e prepara um prompt personalizado
4. **Integração com IA**: O backend chama a API do Google Gemini com o prompt estruturado
5. **Geração de Resposta**: O modelo de IA processa o prompt e gera uma resposta inteligente
6. **Streaming em Tempo Real**: A resposta é transmitida em streaming para o frontend
7. **Renderização**: O React atualiza a interface em tempo real, exibindo a resposta ao usuário

Essa arquitetura garante:

- **Separação clara de responsabilidades**: Cada camada tem seu propósito específico
- **Escalabilidade**: Possibilidade de evoluir cada parte independentemente
- **Manutenibilidade**: Código organizado e fácil de modificar
- **Performance**: Streaming permite feedback imediato ao usuário

## 📂 Estrutura do Projeto

```
estuda-mais/
│
├── 📁 backend/                          # Servidor e lógica do negócio
│   ├── 📄 server.js                     # Ponto de entrada da aplicação
│   ├── 📄 package.json                  # Dependências e configurações
│   ├── 📁 src/
│   │   ├── 📁 controllers/              # Lógica de controle das rotas
│   │   │   ├── PlanoController.js       # Gerenciamento de planos de estudo
│   │   │   └── EstudoController.js      # Controle do agente de estudo
│   │   │
│   │   ├── 📁 routes/                   # Definição dos endpoints da API
│   │   │   ├── PlanoRoutes.js           # Rotas relacionadas a planos
│   │   │   └── EstudoRoutes.js          # Rotas do agente de estudo
│   │   │
│   │   ├── 📁 services/                 # Integrações externas e utilitários
│   │   │   └── GeminiServices.js        # Comunicação com Google Gemini
│   │   │
│   │   └── 📁 prompts/                  # Templates de prompts para IA
│   │       ├── CriarPlanoPrompt.js      # Prompt para geração de planos
│   │       └── EstudoPrompt.js          # Prompt para interações de estudo
│   │
│   └── 📄 .env                          # Variáveis de ambiente (não versionado)
│
├── 📁 frontend/                         # Interface do usuário
│   ├── 📄 index.html                    # Template HTML principal
│   ├── 📄 package.json                  # Dependências do frontend
│   ├── 📄 vite.config.js                # Configurações do Vite
│   ├── 📄 eslint.config.js              # Regras de linting
│   │
│   ├── 📁 src/
│   │   ├── 📄 main.jsx                  # Inicialização da aplicação React
│   │   ├── 📄 App.jsx                   # Componente raiz da aplicação
│   │   ├── 📄 index.css                 # Estilos globais
│   │   │
│   │   ├── 📁 components/               # Componentes reutilizáveis
│   │   │   ├── Header.jsx               # Cabeçalho da aplicação
│   │   │   ├── Nav.jsx                  # Componente de navegação
│   │   │   ├── Footer.jsx               # Rodapé da aplicação
│   │   │   ├── Cards.jsx                # Cards informativos
│   │   │   ├── Home.jsx                 # Conteúdo da página inicial
│   │   │   └── Paths.jsx                # Gerenciamento de rotas
│   │   │
│   │   ├── 📁 pages/                    # Páginas da aplicação
│   │   │   ├── HomePage.jsx             # Página inicial
│   │   │   ├── PlanoDeEstudo.jsx        # Página de criação de planos
│   │   │   ├── SalaDeEstudo.jsx         # Página do chat com IA
│   │   │   └── Layout.jsx               # Layout compartilhado
│   │   │
│   │   ├── 📁 assets/                   # Recursos estáticos
│   │   │
│   │
│   └── 📁 public/                       # Arquivos públicos estáticos
│
├── 📄 README.md                         # Esta documentação
└── 📄 .gitignore                        # Arquivos ignorados pelo Git
```

## ▶️ Como Executar o Projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em seu sistema:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** - Geralmente incluído com o Node.js
- **Git** - Para controle de versão - [Download](https://git-scm.com/)
- **Chave da API Google Gemini** - [Obter gratuitamente](https://ai.google.dev/)

### 🔹 Backend

#### 1️⃣ Navegação para o diretório do backend

Abra o terminal e navegue até a pasta do backend:

```bash
cd backend
```

#### 2️⃣ Instalação das dependências

Execute o comando para instalar todas as bibliotecas necessárias:

```bash
npm install
```

#### 3️⃣ Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz da pasta backend com o seguinte conteúdo:

```env
GEMINI_API_KEY=sua_chave_api_google_gemini_aqui

```

**Como obter a chave da API:**

1. Acesse [Google AI Studio](https://ai.google.dev)
2. Clique em "Get API Key" no menu lateral
3. Crie uma nova chave de API ou selecione uma existente
4. Copie a chave e cole no arquivo `.env`

#### 4️⃣ Inicialização do servidor

Execute o comando para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start
```

**Saída esperada no terminal:**

```
Servidor rodando na porta 3000
```

O backend estará disponível em `http://localhost:3000` e pronto para receber requisições.

### 🔹 Frontend

#### 1️⃣ Navegação para o diretório do frontend

Em um novo terminal, navegue até a pasta do frontend:

```bash
cd frontend
```

#### 2️⃣ Instalação das dependências

Instale as bibliotecas do frontend:

```bash
npm install
```

#### 4️⃣ Configuração das variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `frontend/`:

```
VITE_API_URL=https://seu-backend.onrender.com


- Essa variável é utilizada para definir a URL da API em produção.

- Em ambiente de desenvolvimento, pode ser utilizado http://localhost:3000

```

#### 3️⃣ Inicialização do servidor de desenvolvimento

Execute o comando para iniciar o frontend:

```bash
npm run dev
```

**Saída esperada no terminal:**

```
  VITE v7.1.7  ready in 352 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h for help
```

A aplicação React estará disponível em `http://localhost:5173`.

### ✅ Verificação da Instalação

Para confirmar que tudo está funcionando corretamente:

1. **Backend**: Acesse `http://localhost:3000` - deve retornar uma mensagem de confirmação
2. **Frontend**: Acesse `http://localhost:5173` - deve carregar a interface da aplicação
3. **Integração**: Teste uma funcionalidade que requer comunicação com o backend

Se ambos os serviços estiverem rodando, você poderá utilizar todas as funcionalidades do **Estuda Mais**!

## 🔐 Variáveis de Ambiente

As variáveis de ambiente são essenciais para a segurança e configuração flexível da aplicação. Elas permitem que informações sensíveis (como chaves de API) sejam mantidas fora do código fonte.

### Frontend (.env)

Crie um arquivo `.env` dentro da pasta `frontend/`:

```
VITE_API_URL=https://seu-backend.onrender.com
```


### Backend (.env)

Crie o arquivo `.env` na raiz da pasta `backend/`:

```env
# Chave da API do Google Gemini (OBRIGATÓRIA)
GEMINI_API_KEY=AIzaSyD...sua_chave_completa_aqui

```

### ⚠️ Considerações de Segurança

- **Nunca faça commit** do arquivo `.env` no repositório Git
- **Adicione `.env`** ao arquivo `.gitignore`
- **Use nomes descritivos** mas não revele o conteúdo das variáveis
- **Rode as variáveis** através de um serviço de gerenciamento de secrets em produção
- **Valide as variáveis** no código antes de usar

## 🔗 Integração/API

A comunicação entre frontend e backend é realizada através de uma API RESTful bem estruturada, garantindo eficiência, segurança e escalabilidade.

### Endpoints Principais

#### 📝 Criar Plano de Estudo

**Endpoint:** `POST /plano`

**Descrição:** Gera um plano de estudo personalizado baseado nos parâmetros fornecidos.

**Parâmetros de entrada:**

```json
{
  "goal": "Passar no ENEM 2025",
  "subjects": "Matemática, Português, Física, Química",
  "time": "2 horas por dia",
  "level": "Intermediário"
}
```


**Resposta:** Stream de texto contendo o plano estruturado dia a dia.

#### 💬 Interagir com Agente de Estudo

**Endpoint:** `POST /estudo`

**Descrição:** Permite fazer perguntas ao agente de IA sobre qualquer tópico de estudo.

**Parâmetros de entrada:**

```json
{
  "type": "chat",
  "message": "Como calcular a área de um triângulo equilátero?"
}
```

**Resposta:** Stream de texto com explicação estruturada, exemplos e resumo.

### Fluxo de Comunicação

```
1. Usuário interage com interface React
   ↓
2. Frontend coleta dados do formulário
   ↓
3. Requisição HTTP POST é enviada
   ↓
4. Backend Express.js recebe e valida dados
   ↓
5. Controller monta prompt personalizado
   ↓
6. Serviço chama API Google Gemini
   ↓
7. IA processa e gera resposta
   ↓
8. Backend faz streaming da resposta
   ↓
9. Frontend recebe dados em tempo real
   ↓
10. Interface é atualizada dinamicamente
```

### Headers e Autenticação

Atualmente, a API não requer autenticação para uso básico, mas inclui headers padrão:

```javascript
const headers = {
  "Content-Type": "application/json",
  Accept: "text/plain", // Para streaming
};
```

### Tratamento de Erros

A API retorna códigos HTTP apropriados:

- `200`: Sucesso
- `400`: Dados inválidos
- `500`: Erro interno do servidor

Respostas de erro incluem mensagens descritivas em português.

## 🖼️ Demonstração

### 📱 Página Inicial (HomePage)

A landing page apresenta uma interface clean e acolhedora:

- **Cabeçalho responsivo** com navegação intuitiva
- **Seção hero** explicando o propósito da plataforma
- **Cards interativos** destacando as principais funcionalidades
- **Call-to-action** incentivando o usuário a começar
- **Design responsivo** que se adapta perfeitamente a dispositivos móveis

### 📋 Criar Plano de Estudo (PlanoDeEstudo)

Interface dedicada à geração de planos personalizados:

- **Formulário estruturado** com campos para objetivo, disciplinas, tempo e nível
- **Validação em tempo real** dos campos obrigatórios
- **Botão de geração** com indicador de loading
- **Área de exibição** que mostra o plano sendo gerado em streaming
- **Layout organizado** facilitando a leitura do plano dia a dia

### 🤖 Sala de Estudos Inteligente

Espaço para interação inteligente com a IA:

- **Interface conversacional dinâmica que permite**:
  - Tirar dúvidas livremente (chat)
  - Gerar resumos sob demanda
  - Treinar com questões (modo ativo)
  - Enviar respostas e receber correção com explicação

- **Sistema com múltiplos modos de interação**:
  - Chat livre
  - Resumo
  - Treino + correção

### 🎨 Elementos Comuns

- **Paleta de cores** profissional em tons de roxo e branco
- **Tipografia** legível e hierárquica
- **Ícones consistentes** do React Icons
- **Animações sutis** melhorando a experiência sem distrair
- **Feedback visual** para todas as ações do usuário

## 🌐 Deploy

A aplicação foi deployada utilizando uma arquitetura moderna com separação entre frontend e backend:

### 🔹 Backend

- Hospedado no **Render**
- API Node.js com Express
- Utiliza variáveis de ambiente para segurança
- Pode entrar em modo "sleep" no plano gratuito (primeira requisição pode demorar)

### 🔹 Frontend

- Hospedado no **Vercel**
- Build otimizado com Vite
- Integração com backend via variável de ambiente

### 🔹 Estrutura de Deploy

````

GitHub
├── backend → Render
└── frontend → Vercel

````

### 🔹 Acesso

- Frontend: https://estudamais-liart.vercel.app/ 


## 📚 Aprendizados

### Aprendizados Técnicos

#### Desenvolvimento Full-Stack

- **Integração de Tecnologias**: Combinação harmoniosa de React, Node.js e APIs externas
- **Arquitetura de Software**: Separação clara entre frontend, backend e serviços externos
- **Gerenciamento de Estado**: Estratégias para manter consistência de dados em aplicações React
- **Streaming de Dados**: Implementação de respostas em tempo real para melhor UX

#### Inteligência Artificial e APIs

- **Prompt Engineering**: Arte de criar instruções eficazes para modelos de linguagem
- **Integração com APIs**: Comunicação segura e eficiente com serviços externos
- **Processamento Assíncrono**: Gerenciamento de operações que não bloqueiam a interface
- **Tratamento de Erros**: Estratégias robustas para lidar com falhas de API

#### Qualidade de Código

- **Padrões de Desenvolvimento**: Código limpo, modular e reutilizável
- **Documentação**: READMEs, comentários e documentação de API
- **Performance**: Otimização de carregamento e resposta

### Soft Skills Desenvolvidas

#### Organização e Planejamento

- **Gestão de Projetos**: Coordenação de múltiplas tecnologias e deadlines
- **Priorização de Tarefas**: Foco no que realmente agrega valor
- **Documentação Sistemática**: Criação de guias claros e completos

#### Resolução de Problemas

- **Pesquisa e Aprendizado**: Capacidade de aprender tecnologias rapidamente
- **Tomada de Decisões**: Escolha de ferramentas e abordagens adequadas
- **Adaptabilidade**: Ajuste de planos conforme novos desafios surgem

#### Comunicação

- **Documentação Técnica**: Explicação clara de conceitos complexos
- **Apresentação de Projetos**: Capacidade de "vender" ideias e soluções

#### Criatividade e Inovação

- **Pensamento Fora da Caixa**: Soluções criativas para problemas educacionais
- **Design Centrado no Usuário**: Interfaces que realmente resolvem necessidades
- **Integração de Tecnologias**: Combinação inovadora de ferramentas existentes
- **Visão de Produto**: Entendimento do impacto real das soluções

#### Gestão de Tempo e Produtividade

- **Foco e Concentração**: Manutenção de produtividade em projetos complexos
- **Multitarefa Inteligente**: Coordenação de frontend e backend simultaneamente
- **Autodisciplina**: Manutenção de rotinas de estudo e desenvolvimento
- **Equilíbrio**: Conciliação entre aprendizado teórico e prático

## 👩‍💻 Autor

**Raiza Sousa**  
👨‍💻 Desenvolvedora Full-Stack | Estudante de IA e Soft Skills  
📧 Raizaksilva@gmail.com
🔗 [GitHub](https://github.com/itsraiza)  
🔗 [LinkedIn](https://www.linkedin.com/in/raizasousa/)  
🌐 [Portfólio](https://itsraiza.github.io/portfolio/)

---

<div align="center">

_Desenvolvido com dedicação durante o curso de IA e Soft Skills - Transformando tecnologia em educação acessível_

</div>

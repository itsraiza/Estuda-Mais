export function CriarPlanoPrompt(goal, subjects, time, level) {
  return `
Você é um especialista em educação e preparação para provas como ENEM e concursos.

Crie um plano de estudos personalizado com base nas informações abaixo:

Objetivo: ${goal}
Matérias: ${subjects}
Tempo disponível por dia: ${time}
Nível do aluno: ${level}

REGRAS IMPORTANTES:
- Organize de Segunda a Domingo
- Cada dia começa com o nome (ex: Segunda:)
- Use lista com "-"
- Separe dias com UMA linha em branco

DETALHAMENTO:
- Para cada atividade, inclua:
  - o conteúdo específico
  - o tempo de estudo (ex: 1h, 30min)
- Inclua revisão e exercícios

VÍDEOS:
- NÃO gere links
- Para cada dia, indique:
  🎥 Título do vídeo + nome do canal

FORMATO:

Segunda:
- Matemática: Função do 1º grau (1h)
- Exercícios de função (30min)
- Revisão (30min)
🎥 Vídeo: "Função do 1º grau explicação completa" - Canal: Matemática Rio

IMPORTANTE:
- NÃO escreva introduções
- NÃO use textos fora do formato
- Responda apenas com o plano
- Seja direto

Responda em português do Brasil.
`;
}
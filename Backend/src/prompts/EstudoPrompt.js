export function EstudoPrompt(type, message, questoes) {

  if (type === "chat") {
    return `
Explique o tema de forma simples e direta:

${message}

REGRAS:
- Vá direto ao ponto (sem introdução)
- Use linguagem simples
- Explique passo a passo
- Dê 1 exemplo prático

FORMATO:
Explicação
Exemplo
Resumo curto
`;
  }

  if (type === "summary") {
    return `
Resuma o conteúdo abaixo:

${message}

REGRAS:
- Seja direto
- Use linguagem simples
- Use tópicos
- Dê 1 exemplo curto
- Pegue só o essencial

FORMATO:
- Tópico
- Tópico
- Tópico
- Tópico
- Tópico
`;
  }

  if (type === "questions") {
    return `
Gere 10 questões sobre:

${message}

REGRAS:
- NÃO mostre o gabarito
- NÃO explique
- 5 alternativas (A–E)
- Apenas 1 correta
- Nível ENEM/concursos
- Numere de 1 a 10

FORMATO:

1. Pergunta
A)
B)
C)
D)
E)

(Repita até 10)

IMPORTANTE:
- NÃO inclua respostas
`;
  }

    if (type === "correction") {
      return `
Corrija as respostas do aluno com base nas questões abaixo:

QUESTÕES:
${questoes}

RESPOSTAS DO ALUNO:
${message}

REGRAS:
- Mostre o gabarito correto
- Compare com as respostas do aluno
- Diga ✔ ou ❌
- Explique cada questão de forma simples
- NÃO diga que faltam informações

FORMATO:

1. Resposta correta: X  
Sua resposta: Y  
✔ ou ❌  
Explicação: ...

Repita até a questão 10.
`;
}
}
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateStreamResponse(prompt, res) {
  try {
    const GenAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = GenAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContentStream(prompt);

    let fullResponse = "";

    for await (const chunk of result.stream) {
      const text = chunk?.text?.();

      fullResponse += text

      if (text) {
        res.write(text);
      }
    }

    res.end();

    return fullResponse;

  } catch (error) {
    console.error("Erro Gemini:", error);
    res.status(500).end("Erro na IA");
  }
}
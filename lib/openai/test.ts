import { openai } from "./client";

export async function testOpenAI(): Promise<string> {
  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: "Say exactly: Recovery AI connection successful.",
  });

  return response.output_text;
}

import { toast } from "sonner";
import { generationConfig, model } from "./gemini";

export async function geminiRun(blogPost: string): Promise<{ postSummary: string } | undefined> {
  console.log("RUNNING TO GEMINI");
  toast("Generating")
  try {
    const chatSession = await model.generateContent({
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "You are an expert summarizer. Your task is to read a blog post and create a captivating summary of approximately 200 words. The summary should be a single paragraph, without any lists or bullet points. Your goal is to capture the most interesting and engaging aspects of the post to entice readers to click through and read the full article. Highlight the unique insights, surprising facts, or compelling stories shared in the post. Ensure the summary is written in an engaging and conversational tone, drawing readers in with a hint of what's to come without giving away all the details. Here is the blog post for you to summarize:"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(blogPost);
    toast("Summary generated")
    const postSummary = result.response.text();
    console.log("RETURNED FROM GEMINI ->", postSummary);
    return  {postSummary};
  } catch (error) {
    console.error("Error during chat session:", error);
  }
}

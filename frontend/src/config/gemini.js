import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm"; 

const apiKey = "AIzaSyDnwsRRxsn_WkW5vIEqO3_Jq6C0ZaEftHA"; // Insert your API key directly or load securely from backend
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(await result.response.text());
  return result.response.text();
}

// run();
export default run;
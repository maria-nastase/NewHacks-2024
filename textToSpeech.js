const fs = require('fs');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '.env.local' });
const { transcribeAudio } = require("./speechToText");
const { translateText } = require("./translation");

const openai = new OpenAI( { apiKey: process.env.NEXT_PUBLIC_API_KEY } );

const speechFile = path.resolve("./speech.mp3");

async function toAudio(text) {
    const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: `${text}`,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

async function main() {
    try {
        const audioFilePath = "./audio/combiende.mp3"

        const transcription = await transcribeAudio(audioFilePath);
        console.log("Transcription:", transcription);

        const translation = await translateText(transcription);
        console.log("Translation:", translation);

        const audio = await toAudio(translation.content);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
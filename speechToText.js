import fs from "fs";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local' });
const openai = new OpenAI( { apiKey: process.env.NEXT_PUBLIC_API_KEY } );

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("./audio/combiende.mp3"),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
main();


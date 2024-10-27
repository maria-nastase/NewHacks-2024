const fs = require('fs');
const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const openai = new OpenAI( { apiKey: process.env.NEXT_PUBLIC_API_KEY } );

async function transcribeAudio(filePath) {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(filePath),
    model: "whisper-1",
  });

  console.log(transcription.text);

  return transcription.text;
}

module.exports = { transcribeAudio };



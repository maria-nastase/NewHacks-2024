const OpenAI = require('openai');
const dotenv = require('dotenv');
const { transcribeAudio } = require("./speechToText");

dotenv.config({ path: '.env.local' });
const openai = new OpenAI( { apiKey: process.env.NEXT_PUBLIC_API_KEY } );

async function translateText(text) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: `Translate the following text to English: "${text}"`,
            },
        ],
    });

    console.log(completion.choices[0].message);
    return completion.choices[0].message;
}

module.exports = { translateText };

// async function main() {
//     try {
//         const audioFilePath = "./audio/combiende.mp3"

//         const transcription = await transcribeAudio(audioFilePath);
//         console.log("Transcription:", transcription);

//         const translation = await translateText(transcription);
//         console.log("Translation:", translation);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// main();
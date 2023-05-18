import { v4 as uuidv4 } from 'uuid'

// Generate a UUID
function uuid() {
    return uuidv4();
}

export async function summarizer(text, language) {
    let summarizedText = {
        id: uuid(),
        summary: text,
        saved: false
    };
    const message = `Summarize and translate this, ${summarizedText.summary}, to ${language}`;

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer API_KEY'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
                temperature: 0.8,
                max_tokens: 512,
                top_p: 1.0,
                stop: ['Human', 'Ai']
            })
        });

        const resp = await res.json();

        // Access the response
        const responseMessage = resp.choices[0].message.content;

        summarizedText.summary = responseMessage;

        console.log(responseMessage);
    } catch (error) {
        console.error('Error:', error);
        return null;
    }

    console.log(summarizedText);
    return summarizedText;
}

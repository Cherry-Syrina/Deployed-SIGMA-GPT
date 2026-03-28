const getGeminiAPIResponse = async (message) => {
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: message }]
            }]
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (err) {
        console.log("Gemini API error:", err);
    }
};

export default getGeminiAPIResponse;

async function generateText() {
  const topic = document.getElementById("topic").value;
  const outputDiv = document.getElementById("output");

  if (!topic) {
    outputDiv.innerText = "Please enter a topic.";
    return;
  }

  outputDiv.innerText = "Generating...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "user",
            content: "Write a short paragraph about " + topic
          }
        ]
      })
    });

    const data = await response.json();
    const result = data.choices[0].message.content;

    outputDiv.innerText = result;

  } catch (error) {
    outputDiv.innerText = "Error generating text.";
    console.error(error);
  }
}

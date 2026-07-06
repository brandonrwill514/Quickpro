async function generateQuote() {
  console.log("BUTTON CLICKED");

  const res = await fetch("/api/generate-quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ test: "hello" }),
  });

  console.log("STATUS:", res.status);

  const data = await res.json();
  console.log("DATA:", data);
}
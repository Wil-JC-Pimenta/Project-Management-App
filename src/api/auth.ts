export const login = async (token: string) => {
    // Simula uma requisição de login ao servidor com OAuth 2
    return fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    }).then(response => response.json());
  };
  
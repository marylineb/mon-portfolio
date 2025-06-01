<script>
  let name = "";
  let email = "";
  let message = "";

  async function submitForm() {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      alert("Message envoyé !");
      name = email = message = "";
    }
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <ul>
    <li>
      <label for="name">Nom :</label>
      <input id="name" bind:value={name} required />
    </li>

    <li>
      <label for="email">Email :</label>
      <input id="email" type="email" bind:value={email} required />
    </li>

    <li>
      <label for="message">Message :</label>
      <textarea id="message" bind:value={message} required></textarea>
    </li>

    <li>
      <button type="submit">Envoyer</button>
    </li>
  </ul>
</form>

<style>
  ul{
    list-style: none;
    padding: 20px;
    margin: 20px;
    li{
      margin: 20px;
    }
  }
  form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem; /* Ajoute un espace entre les champs */
}
button {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 75px;
  background-color: #37bd49; /* Couleur du bouton */
  color: rgb(0, 0, 0);
  cursor: pointer;
}
input, textarea {
  padding: 10px; /* Augmente l'espace interne des champs */
  font-size: 1rem; /* Agrandit le texte à l'intérieur */
  border-radius: 5px; /* Ajoute des coins arrondis */
  border: 1px solid #ccc; /* Ajoute une bordure discrète */
}

button:hover {
  background-color: #551a8b; /* Couleur du bouton au survol */
}
</style>

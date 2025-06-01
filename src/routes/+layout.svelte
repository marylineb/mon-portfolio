<header>
  <div>
    <img src="/mon-propre-logo.png" alt="" />
  </div>
  <nav>
    <a href="/">Home</a>
    <a href="/mes-projets">Mes Projets</a>
    <a href="/contact">Contact</a>
  </nav>
</header>
<slot />

<footer>
  <ul>
    <li><p>philippemarylineb@gmail.com</p></li>
    <li><p>© 2025 Maryline. Tous droits réservés. Bisous.</p></li>
    <li><p>contact: +33-759-507-390</p></li>
  </ul>
</footer>

<style>
  nav {
    margin: 5px;
    padding: 10px 20px;
    background-color: #ff6666;
    border: 1px solid #000;
    cursor: pointer;
  }

  nav a {
    transition: transform 0.2s;
    margin: 16px;
    text-decoration: none;
    color: #551a8b;
  }

  nav a:hover {
    transform: scale(1.1);
    color: white;
  }

  img {
    width: 75px;
    margin: 16px;
  }

  footer {
    margin: 5px;
    padding: 10px 20px;
    background-color: #ff6666;
    color: #551a8b;
    border: 1px solid #000;
    ul{
      list-style: none;
    margin: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }
    p{
      margin: 16px;
    }
  }
</style>
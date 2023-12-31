function Footer() {
    return <footer className="page-footer green lighten-3">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-3 right" href="https://fugok.github.io/react-shop/" rel="noreferrer" target="_blank">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}
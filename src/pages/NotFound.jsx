import "../styles/notfound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="airplane-wrapper">
        <div className="airplane">✈️</div>
      </div>

      <h1 className="nf-title">404</h1>
      <p className="nf-text">
        Oops! Looks like this destination doesn’t exist.
      </p>

      <a href="/" className="nf-btn">
        Back to Home
      </a>
    </div>
  );
}

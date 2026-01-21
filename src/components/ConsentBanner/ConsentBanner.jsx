import { useEffect, useState } from "react";

const STORAGE_KEY = "demo_analytics_consent";

export default function ConsentBanner() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setConsent(saved);
  }, []);

  const updateConsent = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: value,
    });
  };

  if (consent) return null;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: 12,
      }}
    >
      <div className="container" style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
        <p style={{ margin: 0 }}>
          This site uses analytics for learning demos.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => updateConsent("denied")}>
            Reject
          </button>
          <button className="btn dark-btn" onClick={() => updateConsent("granted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

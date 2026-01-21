import { useMemo, useState } from "react";

export default function UTMBuilder() {
  const [baseUrl, setBaseUrl] = useState("http://localhost:5173/");
  const [source, setSource] = useState("instagram");
  const [medium, setMedium] = useState("social");
  const [campaign, setCampaign] = useState("winter_sale");

  const url = useMemo(() => {
    const u = new URL(baseUrl);
    u.searchParams.set("utm_source", source);
    u.searchParams.set("utm_medium", medium);
    u.searchParams.set("utm_campaign", campaign);
    return u.toString();
  }, [baseUrl, source, medium, campaign]);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert("Copied UTM link!");
  };

  return (
    <div style={{ background: "#fff", padding: 16, borderRadius: 14 }}>
      <div style={{ display: "grid", gap: 10 }}>
        <label>
          Base URL
          <input
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <label>
          utm_source
          <input
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <label>
          utm_medium
          <input
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <label>
          utm_campaign
          <input
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn dark-btn" onClick={copy}>
            Copy Link
          </button>
          <a className="btn" href={url} target="_blank" rel="noreferrer">
            Open Link
          </a>
        </div>

        <p style={{ opacity: 0.8, marginTop: 10, wordBreak: "break-word" }}>
          {url}
        </p>
      </div>
    </div>
  );
}

export function track(eventName, payload = {}) {
  // Works even before GA4/GTM is installed
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName,  event_time: new Date().toISOString(), ...payload });

  // Helpful for local debugging
  console.log("[track]", eventName, payload);
}

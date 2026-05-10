import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PGC — Flowchart Symbol Hub" },
      {
        name: "description",
        content:
          "Punjab Group of Colleges — interactive flowchart program hub with 21+ practical examples.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/hub.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#04051a", color: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      Loading PGC Flowchart Hub…
    </div>
  );
}

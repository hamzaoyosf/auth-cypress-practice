import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Next.js Auth Practice</h1>
      <p style={{ color: "#666" }}>
        {session?.user
          ? `Logged in as ${session.user.email}`
          : "Not logged in"}
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        {!session?.user ? (
          <Link
            href="/login"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Go to Login
          </Link>
        ) : (
          <Link
            href="/dashboard"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Go to Dashboard
          </Link>
        )}
      </div>
    </main>
  );
}

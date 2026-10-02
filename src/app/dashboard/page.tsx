import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem 2rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid #eaeaea",
          paddingBottom: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "700", margin: "0 0 0.5rem 0" }}>
            Welcome to Dashboard
          </h1>
          <p style={{ color: "#666", margin: 0 }}>
            Logged in as: <strong style={{ color: "#ffffffff" }}>{session.user.email}</strong>
          </p>
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Sign Out
          </button>
        </form>
      </div>

      <div
        style={{
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
        }}
      >
        <p style={{ margin: 0, color: "black" }}>
          This is a protected page. Only authenticated users can view this content.
        </p>
      </div>
    </main>
  );
}

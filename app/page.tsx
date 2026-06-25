import { redirect } from "next/navigation";

export default function Home() {
  // Redirige directamente al panel principal
  redirect("/dashboard");
}

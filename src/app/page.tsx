import { Collections, Header } from "@/components"

export default function Home() {
  return (
    <main>
      <Header button={true} profileInfo={false} />
      <Collections />
    </main>
  )
}

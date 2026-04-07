import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { AppCards } from '@/components/app-cards'
import { AttributionBridge } from '@/components/attribution-bridge'

export default function Page() {
  return (
    <main>
      <Hero />
      <Mission />
      <AppCards />
      <AttributionBridge />
    </main>
  )
}

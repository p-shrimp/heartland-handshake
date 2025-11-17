import { HeroRotator } from "@/components/HeroRotator";
import PricingCards from "@/components/PricingCards";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <HeroRotator />
          <p className="text-xl mt-8 max-w-3xl mx-auto opacity-90">
            Ex-dealer turned buyer advocate. I negotiate your car deal so you save thousands — or it’s free.
          </p>
          <div className="mt-12">
            <a href="/pricing" className="btn-primary text-2xl px-12 py-5">Start Saving Today</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Choose Your Plan</h2>
          <PricingCards />
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict API Rate Limit Breaches
          <span className="text-[#58a6ff]"> Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your API usage patterns in real time. Get accurate forecasts of when you'll hit rate limits and receive actionable optimization recommendations — before your service goes down.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Forecasting — $14/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">99%</div>
            <div className="text-xs text-[#8b949e] mt-1">Forecast Accuracy</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;1min</div>
            <div className="text-xs text-[#8b949e] mt-1">Alert Latency</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-xs text-[#8b949e] mt-1">API Integrations</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro</span>
            <div className="text-5xl font-bold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
            <p className="text-[#8b949e] text-sm">Everything you need to stay ahead of rate limits</p>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              'Real-time usage monitoring dashboard',
              'Time-series rate limit forecasting',
              'Webhook integrations (Slack, PagerDuty)',
              'Optimization recommendations engine',
              'Up to 10 API endpoints tracked',
              'Email & SMS breach alerts',
              '30-day usage history & reports',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the rate limit forecasting work?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">We collect your API call data via lightweight webhooks or SDK integrations, then apply time-series analysis to model your usage trends. The forecasting engine projects future consumption against your rate limit thresholds and alerts you before a breach occurs.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which APIs and providers are supported?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">We support 50+ popular APIs out of the box including OpenAI, Stripe, Twilio, GitHub, Salesforce, and more. You can also connect any custom REST API using our universal webhook integration in minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">Yes, absolutely. You can cancel your subscription at any time from your billing dashboard with no penalties or fees. Your access continues until the end of the current billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} API Rate Limit Usage Forecaster. All rights reserved.</p>
      </footer>
    </main>
  )
}

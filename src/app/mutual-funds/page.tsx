import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Mutual Funds - Investment Solutions | MNS Bank',
  description: 'Invest in mutual funds through MNS Bank. Wide range of equity, debt, and hybrid funds with expert guidance and online investment.',
  keywords: 'mutual funds, SIP, investment, equity funds, debt funds, systematic investment plan, wealth management',
};

export default function MutualFundsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Mutual Funds
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Grow your wealth with expertly managed mutual fund investments. Choose from a wide range of funds with professional guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Why Mutual Funds */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Why Invest in Mutual Funds?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Professional Management</h3>
                <p className="text-text-secondary text-sm">Expert fund managers handle investments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Diversification</h3>
                <p className="text-text-secondary text-sm">Spread risk across multiple securities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Liquidity</h3>
                <p className="text-text-secondary text-sm">Easy to buy and sell units</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Transparency</h3>
                <p className="text-text-secondary text-sm">Regular disclosures and NAV updates</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fund Categories */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Fund Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Equity Funds</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Large Cap Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest in top 100 companies by market cap</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Stable returns</li>
                      <li>• Lower volatility</li>
                      <li>• Suitable for conservative investors</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Mid Cap Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest in companies ranked 101-250</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Growth potential</li>
                      <li>• Moderate risk</li>
                      <li>• 3-5 year investment horizon</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Small Cap Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest in companies beyond top 250</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• High growth potential</li>
                      <li>• High risk</li>
                      <li>• 5+ year investment horizon</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Debt Funds</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Liquid Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest in short-term money market instruments</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• High liquidity</li>
                      <li>• Low risk</li>
                      <li>• Better than savings account</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Income Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest in government and corporate bonds</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Regular income</li>
                      <li>• Moderate risk</li>
                      <li>• 2-3 year investment horizon</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Gilt Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Invest only in government securities</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Zero credit risk</li>
                      <li>• Interest rate risk</li>
                      <li>• Suitable for conservative investors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Hybrid Funds</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Balanced Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">65-80% equity, 20-35% debt</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Balanced risk-return</li>
                      <li>• Auto rebalancing</li>
                      <li>• First-time investors</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Arbitrage Funds</h4>
                    <p className="text-sm text-text-secondary mb-2">Exploit price differences in markets</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Low risk</li>
                      <li>• Tax efficient</li>
                      <li>• Market neutral returns</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Dynamic Asset Allocation</h4>
                    <p className="text-sm text-text-secondary mb-2">Vary equity-debt allocation based on market</p>
                    <ul className="text-xs text-text-secondary space-y-1">
                      <li>• Tactical allocation</li>
                      <li>• Risk management</li>
                      <li>• Professional management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Options */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Investment Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Systematic Investment Plan (SIP)</h3>
                <p className="text-text-secondary mb-4">
                  Invest small amounts regularly to build wealth over time through disciplined investing.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Minimum Investment</span>
                    <span className="font-medium">₹500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Flexibility</span>
                    <span className="font-medium">Daily/Weekly/Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Benefit</span>
                    <span className="font-medium">Rupee Cost Averaging</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Lumpsum Investment</h3>
                <p className="text-text-secondary mb-4">
                  Invest a large amount at once for potential higher returns with proper timing.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Minimum Investment</span>
                    <span className="font-medium">₹5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Suitable For</span>
                    <span className="font-medium">Experienced Investors</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Risk Factor</span>
                    <span className="font-medium">Market Timing Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Invest */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              How to Invest
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">KYC Completion</h3>
                <p className="text-text-secondary text-sm">Complete your KYC process</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Select Fund</h3>
                <p className="text-text-secondary text-sm">Choose suitable fund</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Investment Amount</h3>
                <p className="text-text-secondary text-sm">Decide SIP or lumpsum</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Start Investing</h3>
                <p className="text-text-secondary text-sm">Complete transaction</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Funds */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Top Performing Funds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">Fund Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">1 Year Return</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">3 Year Return</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-text-primary">MNS Equity Fund</td>
                    <td className="py-3 px-4 text-text-secondary">Large Cap</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">12.5%</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">15.8%</td>
                    <td className="py-3 px-4"><span className="text-yellow-600">Medium</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-text-primary">MNS Mid Cap Fund</td>
                    <td className="py-3 px-4 text-text-secondary">Mid Cap</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">18.2%</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">22.4%</td>
                    <td className="py-3 px-4"><span className="text-red-600">High</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-text-primary">MNS Liquid Fund</td>
                    <td className="py-3 px-4 text-text-secondary">Liquid</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">7.2%</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">7.5%</td>
                    <td className="py-3 px-4"><span className="text-green-600">Low</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-text-primary">MNS Balanced Fund</td>
                    <td className="py-3 px-4 text-text-secondary">Hybrid</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">10.8%</td>
                    <td className="py-3 px-4 text-brand-accent font-semibold">13.2%</td>
                    <td className="py-3 px-4"><span className="text-yellow-600">Medium</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Benefits of Investing Through MNS Bank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Expert Guidance</h3>
                <p className="text-text-secondary text-sm">Professional advice from certified advisors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Easy Investment</h3>
                <p className="text-text-secondary text-sm">Online and offline investment options</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Portfolio Tracking</h3>
                <p className="text-text-secondary text-sm">Monitor your investments online</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What is the minimum investment amount?</h3>
                <p className="text-text-secondary">You can start with as low as ₹500 per month through SIP or ₹5,000 for lumpsum investment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Are mutual funds taxable?</h3>
                <p className="text-text-secondary">Yes, capital gains are taxable. Long-term gains (held for 1+ year) are taxed at 10% above ₹1 lakh, short-term gains are taxed as per your income slab.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Can I withdraw my investment anytime?</h3>
                <p className="text-text-secondary">Yes, most mutual funds allow redemption anytime. However, exit charges may apply for early withdrawals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">How do I track my investments?</h3>
                <p className="text-text-secondary">You can track your investments through our net banking portal, mobile app, or CAS statements sent quarterly.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Start Your Investment Journey Today!
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Begin your wealth creation journey with mutual funds. Our experts will help you choose the right funds based on your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8">
                Start Investing
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



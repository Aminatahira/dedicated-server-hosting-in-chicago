import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  Globe,
  Headphones,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a
                href="https://arzhost.com/"
                className="text-2xl font-bold text-primary"
              >
                ARZ Host
              </a>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Chicago Dedicated Hosting
                </a>
                <a
                  href="https://arzhost.com/dedicated-servers/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Dedicated Server
                </a>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Lifetime Web Hosting
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="https://www.arzhost.com/contact-us/">Contact</a>
              </Button>
              <Button asChild>
                <a href="https://arzhost.com/dedicated-servers/">Get Started</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            Dedicated Server Hosting in Chicago
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Enterprise-Grade Hosting, Right in the Heart of the Midwest
          </p>
          <p className="text-lg mb-10 text-foreground max-w-5xl mx-auto leading-relaxed">
            Take your business to the next level with powerful, secure, and
            fully customizable dedicated servers hosted in Chicago. Whether
            you're running a high-traffic website, eCommerce store, data
            application, or internal system—our Chicago servers deliver
            consistent speed, total control, and 24/7 support you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="https://arzhost.com/dedicated-servers/">
                🏁 Start With Confidence
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6"
            >
              <a href="https://www.arzhost.com/contact-us/">
                💬 Speak to a Hosting Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Chicago Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Host in Chicago?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Central U.S. Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy ultra-low latency across North America thanks to
                  Chicago's strategic network hub.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Server className="h-10 w-10 text-primary mb-4" />
                <CardTitle>No Shared Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You get 100% of your server—CPU, memory, bandwidth, and
                  disk—fully isolated for your use only.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Local Infrastructure You Can Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Host in one of Chicago's top-tier data centers with redundant
                  power and top-grade security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Total Control, Total Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Install your preferred OS, software stack, and tools with full
                  root access and no limitations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Built for Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized for uptime, heavy traffic, and applications that
                  can't afford slowdowns or failures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Headphones className="h-10 w-10 text-primary mb-4" />
                <CardTitle>24/7 Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get help from real engineers who understand your
                  infrastructure needs, any time of day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              💰 Choose Your Server Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Perfectly matched for businesses of every size
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Card className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">Basic Server</CardTitle>
                    <CardDescription>
                      Small businesses or test environments
                    </CardDescription>
                    <div className="text-3xl font-bold">
                      $100
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://arzhost.com/dedicated-servers/">
                        Choose Plan
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Standard Server
                    </CardTitle>
                    <CardDescription>
                      Growing sites, internal apps, staging
                    </CardDescription>
                    <div className="text-3xl font-bold">
                      $110
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://arzhost.com/dedicated-servers/">
                        Choose Plan
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary transition-colors border-primary bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-primary">
                        Business Server
                      </CardTitle>
                      <Badge className="bg-primary text-primary-foreground">
                        Popular
                      </Badge>
                    </div>
                    <CardDescription>
                      Live production, eCommerce stores
                    </CardDescription>
                    <div className="text-3xl font-bold">
                      $120
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://arzhost.com/dedicated-servers/">
                        Choose Plan
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Performance Pro
                    </CardTitle>
                    <CardDescription>
                      SaaS platforms, custom apps, busy websites
                    </CardDescription>
                    <div className="text-3xl font-bold">
                      $160
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://arzhost.com/dedicated-servers/">
                        Choose Plan
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">
                      Ultimate Power
                    </CardTitle>
                    <CardDescription>
                      Enterprise workloads, large data sets
                    </CardDescription>
                    <div className="text-3xl font-bold">
                      $170
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://arzhost.com/dedicated-servers/">
                        Choose Plan
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-muted/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              ✅ Every server includes:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Free setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>DDoS protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Open email ports (including Port 25)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>SSD storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Full root access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Weekly backups</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>24/7 expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🧩 Use Cases We Excel At
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  E-Commerce Stores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Run fast, secure checkouts without downtime during peak sales
                  hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Business Dashboards & CRMs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Power internal tools and SaaS apps with speed and scalability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Data Processing & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Handle big data and automated tasks without bottlenecks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Email Marketing Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Send campaigns with your own mail server—freedom to configure,
                  scale, and deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Agencies & Hosting Resellers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Offer clients private, secure hosting without sharing your
                  server's performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <a
                    href="https://arzhost.com/"
                    className="hover:text-primary transition-colors"
                  >
                    VPS Hosting
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transition from shared hosting to dedicated resources with our
                  enterprise-grade infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🗣️ Hear From Our Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Verified Client</span>
                </div>
                <blockquote className="text-lg mb-4">
                  "We chose Chicago hosting for proximity, but stayed for the
                  reliability. Uptime has been flawless."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Tony, Digital Agency Lead
                </cite>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Verified Client</span>
                </div>
                <blockquote className="text-lg mb-4">
                  "Email servers run smoothly here—no more mail delivery issues
                  like before. Everything's under control."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Priya, Marketing Consultant
                </cite>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Verified Client</span>
                </div>
                <blockquote className="text-lg mb-4">
                  "Their team migrated all our systems and set up our
                  Chicago-based dedicated box overnight. Game-changer."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Marcus, SaaS Founder
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🔐 Features That Matter Most
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Chicago-Based Data Center
                </h3>
                <p className="text-muted-foreground">
                  Fast connections across the U.S. with strong peering points.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Email-Friendly Configuration
                </h3>
                <p className="text-muted-foreground">
                  Send emails directly from your server—great for transactional
                  and bulk email.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Easy Scalability</h3>
                <p className="text-muted-foreground">
                  Upgrade RAM, CPU, or disk space without reinstalling or losing
                  data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  24/7 Support with Real Engineers
                </h3>
                <p className="text-muted-foreground">
                  Speak to experienced staff who solve problems fast, anytime
                  you need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Security Built In
                </h3>
                <p className="text-muted-foreground">
                  Firewall management, anti-DDoS, and{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Transport_Layer_Security"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SSL support
                  </a>
                  —your server is protected day and night.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enterprise Infrastructure
                </h3>
                <p className="text-muted-foreground">
                  Built on enterprise-grade hardware with redundant systems for
                  maximum reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            📌 Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Q: Is server setup instant?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, most servers are provisioned and ready within minutes of
                  your order.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Q: Can I host multiple websites?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. You can host multiple domains or client projects
                  on one server.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Q: Will I have root/admin access?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all dedicated servers come with full administrative
                  access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Q: Can I install my own control panel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes—install cPanel, Plesk, or any custom panel you prefer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>
                  Q: What if I need help managing the server?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer optional managed services for software updates,
                  security, and monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 Ready to Take Control?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Choose a Chicago-based dedicated server that offers raw power,
            unmatched reliability, and the ability to customize every aspect of
            your hosting experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="https://arzhost.com/dedicated-servers/">
                👉 Choose Your Plan
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6"
            >
              <a href="https://www.arzhost.com/contact-us/">
                💬 Speak to a Hosting Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                <a
                  href="https://arzhost.com/"
                  className="text-primary hover:underline"
                >
                  ARZ Host
                </a>
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional hosting solutions with enterprise-grade
                infrastructure and 24/7 support.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+16315948060"
                    className="text-primary hover:underline"
                  >
                    +1 (631) 594-8060
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://arzhost.com/dedicated-servers/"
                    className="hover:text-primary transition-colors"
                  >
                    Dedicated Servers
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:text-primary transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/hosting/cheap-dedicated-server-chicago/"
                    className="hover:text-primary transition-colors"
                  >
                    Chicago Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/"
                    className="hover:text-primary transition-colors"
                  >
                    VPS Hosting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:text-primary transition-colors"
                  >
                    24/7 Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/dedicated-servers/"
                    className="hover:text-primary transition-colors"
                  >
                    Server Management
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Security"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Security Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} ARZ Host. All rights reserved.
              Professional Chicago dedicated hosting solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

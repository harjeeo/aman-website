import PageHeader from '../components/PageHeader'
import LegalSection from '../components/LegalSection'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Verde Wear"
        title="Privacy Policy"
        description="How we collect, use, and protect your information when you shop with us."
      />

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-sm text-white/50">Last updated: January 2026</p>

          <div className="mt-6">
            <LegalSection title="1. Information We Collect">
              <p>
                We collect information you provide directly to us, such as your name, email address, shipping
                address, and payment details when you place an order, create an account, or sign up for our
                newsletter.
              </p>
            </LegalSection>

            <LegalSection title="2. How We Use Your Information">
              <ul className="list-disc space-y-1 pl-5">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders, account, or promotions</li>
                <li>To improve our site, products, and customer experience</li>
                <li>To prevent fraud and maintain the security of our site</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. Cookies">
              <p>
                We use cookies and similar technologies to remember your preferences, keep items in your cart,
                and understand how you use our site. You can disable cookies in your browser settings, though
                some features may not work correctly as a result.
              </p>
            </LegalSection>

            <LegalSection title="4. Sharing Your Information">
              <p>
                We do not sell your personal information. We may share it with trusted third parties who help
                us operate our site — such as payment processors and shipping carriers — solely for the purpose
                of fulfilling your order.
              </p>
            </LegalSection>

            <LegalSection title="5. Data Security">
              <p>
                We use industry-standard encryption and security practices to protect your personal
                information. However, no method of transmission over the internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection title="6. Your Rights">
              <p>
                You may request access to, correction of, or deletion of your personal data at any time by
                contacting us. You may also unsubscribe from marketing emails using the link in any email we
                send.
              </p>
            </LegalSection>

            <LegalSection title="7. Changes to This Policy">
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </LegalSection>

            <LegalSection title="8. Contact Us">
              <p>
                If you have questions about this Privacy Policy, reach us at{' '}
                <a href="mailto:hello@verdewear.com" className="text-white underline underline-offset-2">
                  hello@verdewear.com
                </a>
                .
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  )
}

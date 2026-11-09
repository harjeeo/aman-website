import PageHeader from '../components/PageHeader'
import LegalSection from '../components/LegalSection'

export default function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Verde Wear"
        title="Terms &amp; Conditions"
        description="Please read these terms carefully before using our site or placing an order."
      />

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-sm text-white/50">Last updated: January 2026</p>

          <div className="mt-6">
            <LegalSection title="1. Acceptance of Terms">
              <p>
                By accessing or using the Verde Wear website, you agree to be bound by these Terms &amp;
                Conditions. If you do not agree with any part of these terms, please do not use our site.
              </p>
            </LegalSection>

            <LegalSection title="2. Use of This Site">
              <p>
                You agree to use this site only for lawful purposes. You must not use the site in any way that
                could damage, disable, or impair it, or interfere with anyone else's use of the site.
              </p>
            </LegalSection>

            <LegalSection title="3. Orders &amp; Payment">
              <p>
                All orders placed through Verde Wear are subject to acceptance and availability. We reserve the
                right to refuse or cancel any order for any reason, including pricing errors or suspected
                fraud. Prices are listed in USD and are subject to change without notice.
              </p>
            </LegalSection>

            <LegalSection title="4. Intellectual Property">
              <p>
                All content on this site — including text, graphics, logos, and images — is the property of
                Verde Wear and protected by applicable intellectual property laws. You may not reproduce or
                distribute any part of this site without our written permission.
              </p>
            </LegalSection>

            <LegalSection title="5. Limitation of Liability">
              <p>
                Verde Wear is not liable for any indirect, incidental, or consequential damages arising from
                your use of this site or any products purchased through it, to the fullest extent permitted by
                law.
              </p>
            </LegalSection>

            <LegalSection title="6. Changes to These Terms">
              <p>
                We may update these Terms &amp; Conditions from time to time. Changes take effect as soon as
                they're posted on this page, so please check back periodically.
              </p>
            </LegalSection>

            <LegalSection title="7. Contact Us">
              <p>
                Questions about these terms? Reach us anytime at{' '}
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

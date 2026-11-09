import PageHeader from '../components/PageHeader'
import LegalSection from '../components/LegalSection'

export default function RefundPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Verde Wear"
        title="Refund &amp; Cancellation Policy"
        description="Our policy on order cancellations, returns, and refunds."
      />

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-sm text-white/50">Last updated: January 2026</p>

          <div className="mt-6">
            <LegalSection title="1. Order Cancellations">
              <p>
                You may cancel your order within 2 hours of placing it, as long as it hasn't already shipped.
                Contact us as soon as possible with your order number to request a cancellation.
              </p>
            </LegalSection>

            <LegalSection title="2. Returns &amp; Exchanges">
              <p>
                We accept returns and exchanges within 30 days of delivery, provided the item is unworn,
                unwashed, and in its original packaging with tags attached. Final sale items are not eligible
                for return.
              </p>
            </LegalSection>

            <LegalSection title="3. Refund Process">
              <p>
                Once we receive and inspect your returned item, we'll notify you of the approval or rejection
                of your refund. Approved refunds are issued to your original payment method within 5–7 business
                days.
              </p>
            </LegalSection>

            <LegalSection title="4. Non-Returnable Items">
              <ul className="list-disc space-y-1 pl-5">
                <li>Final sale or clearance items</li>
                <li>Gift cards</li>
                <li>Items marked as non-returnable at checkout</li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Damaged or Defective Items">
              <p>
                If your order arrives damaged or defective, contact us within 7 days of delivery with photos of
                the item. We'll arrange a free replacement or full refund.
              </p>
            </LegalSection>

            <LegalSection title="6. How to Initiate a Return">
              <p>
                Email{' '}
                <a href="mailto:hello@verdewear.com" className="text-white underline underline-offset-2">
                  hello@verdewear.com
                </a>{' '}
                with your order number and reason for return, and we'll send you prepaid return instructions.
              </p>
            </LegalSection>

            <LegalSection title="7. Contact Us">
              <p>
                Questions about a return, exchange, or refund? We're here Mon–Fri, 9am–6pm — reach us at{' '}
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

import { HeadsetIcon, TruckDeliveryIcon, SecurityLockIcon, Mail01Icon } from 'hugeicons-react'

const services = [
  {
    icon: HeadsetIcon,
    title: 'Customer Service',
    detail: "We're here Mon–Fri, 9am–6pm to help with sizing, orders, and care.",
  },
  {
    icon: TruckDeliveryIcon,
    title: 'Free Shipping',
    detail: 'Complimentary shipping on all orders over $75, delivered in 3–5 days.',
  },
  {
    icon: SecurityLockIcon,
    title: 'Secure Payment',
    detail: 'Checkout safely with encrypted payments and buyer protection.',
  },
  {
    icon: Mail01Icon,
    title: 'Contact Us',
    detail: 'Questions about a piece? Reach us anytime at hello@verdewear.com.',
  },
]

export default function Services() {
  return (
    <section id="contact-us" className="bg-cream-dark py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
                <Icon size={24} />
              </span>
              <h3 className="font-display mt-4 text-lg text-charcoal">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

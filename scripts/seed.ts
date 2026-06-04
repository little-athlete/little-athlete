import 'dotenv/config'
import { adminDb } from '../src/lib/firebase-admin'
import type { ILandingPage } from '../src/db/firestore/interfaces/landing'
import type { ISiteSettings } from '../src/db/firestore/interfaces/site_settings'

/**
 * Seed singleton docs so the admin has something to edit and the public
 * page renders real content. Run once: `npm run seed`.
 * `merge: true` keeps any edits already made in the admin.
 * Image URLs point at /public placeholders until replaced via the admin.
 */

const siteSettings: Omit<ISiteSettings, 'id'> = {
  logo_url: '/logo.svg',
  nav_links: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Programs', href: '/program' },
    { label: 'Location', href: '/location' },
    { label: 'Certifications', href: '/certification' },
  ],
  contact_wa_url: 'https://wa.me/620000000000',
  footer_desc:
    'Little Athlete is a premium, semi-private sports and music school in Indonesia for children aged 1-12. It focuses on personalized early childhood development by keeping class sizes very small.',
  footer_about_links: [
    { label: 'Vision and Mission', href: '/about-us#vision' },
    { label: 'Achievement', href: '/about-us#achievement' },
  ],
  footer_program_links: [
    { label: 'Multi Sports', href: '/program' },
    { label: 'Basketball and Karate', href: '/program' },
    { label: 'Multi Instruments', href: '/program' },
    { label: 'Motoric Class', href: '/program' },
  ],
  footer_more_links: [
    { label: 'Location', href: '/location' },
    { label: 'Certification', href: '/certification' },
  ],
  instagram_url: 'https://instagram.com/littleathlete',
  whatsapp_url: 'https://wa.me/620000000000',
  copyright_text: '© Copyright 2026, All Rights Reserved by Little Athlete',
  seo_default_title: 'Little Athlete | Semi-Private Sports & Music School for Kids',
  seo_default_description:
    'Premium semi-private sports and music school in Indonesia for children aged 1-12. Personalized early childhood development in very small classes.',
}

const pageLanding: Omit<ILandingPage, 'id'> = {
  hero_title: 'Helping your little ones grow through the power of',
  hero_title_accent: 'Sports & Music',
  hero_button_label: 'Enjoy the Free Trial',
  hero_button_url: 'https://wa.me/620000000000',
  hero_image_url: '/landing/hero-characters.png',

  slider_images: [
    '/landing/slider-1.jpg',
    '/landing/slider-2.jpg',
    '/landing/slider-3.jpg',
    '/landing/slider-4.jpg',
  ],

  story_eyebrow: 'OUR STORY',
  story_title: 'The First Ever',
  story_title_accent: 'Semi Private & Sports Music School',
  story_desc:
    'Little Athlete is a premium semi-private sports and music school in Indonesia for children aged 3-12. We focus on personalised early childhood development by keeping class sizes very small.',
  story_primary_label: 'Book Free Trial',
  story_primary_url: 'https://wa.me/620000000000',
  story_secondary_label: 'Certifications',
  story_secondary_url: '/certification',
  story_image_url: '/landing/story.jpg',

  programs_title: 'From Sports to Music for Kids 1-12yo',
  programs_title_accent: 'Sports to Music',
  programs_desc:
    'We help kids build confidence and a love for sports through fun, structured training. At the same time, we nurture creativity and self-expression with engaging early childhood music lessons. Whether they love to move, play, or make music, we have the perfect program to spark their passion!',
  program_cards: [
    { title: 'School Readiness Program', age_label: 'Toddler (1.5-3yo)', image_url: '/landing/program-1.jpg' },
    { title: 'Exploration Program', age_label: 'Preschool (3-6 y.o)', image_url: '/landing/program-2.jpg' },
    { title: 'Focused Program', age_label: 'Kids (6-12 y.o)', image_url: '/landing/program-3.jpg' },
  ],

  stats_title: 'The trust that we earned',
  stats_title_accent: 'trust',
  stats_image_url: '/landing/stats-kids.png',
  stats_items: [
    { value: '3', label: 'Dedicated locations' },
    { value: '3', label: 'Dedicated locations' },
    { value: '4.000', label: 'Little athlete registered' },
    { value: '4', label: 'International sports certification' },
    { value: '3', label: 'Dedicated locations' },
    { value: '3', label: 'Dedicated locations' },
  ],

  testimony_eyebrow: '420+ Happy Parents',
  testimony_title: "Don't just take our words",
  testimony_image_url: '/landing/testimony-kids.png',
  testimonials: [
    { quote: 'Little Athlete has been incredible for our child. The coaches are patient and encouraging.', name: 'Jen** Wil***', stars: 5 },
    { quote: 'The semi private class are amazing! Our child gets the attention they need.', name: 'Dev** La***', stars: 5 },
  ],

  cta_title: 'Ready to join the Little Athlete family? 🌟',
  cta_desc: 'Start with a free trial class — no commitment needed.',
  cta_button_label: 'Start Your Free Trial',
  cta_button_url: 'https://wa.me/620000000000',
}

async function seed() {
  const singletons: Record<string, object> = {
    site_settings: siteSettings,
    page_landing: pageLanding,
    page_about: {},
    page_location: {},
    page_certification: {},
  }

  for (const [docId, data] of Object.entries(singletons)) {
    await adminDb.collection('singletons').doc(docId).set(data, { merge: true })
    console.log(`seeded singletons/${docId}`)
  }

  console.log('Seed selesai.')
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seed gagal:', err)
    process.exit(1)
  })

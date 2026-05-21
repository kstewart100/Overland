export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'color-primitive-blue': 'var(--color-primitive-blue)',
        'color-primitive-navy': 'var(--color-primitive-navy)',
        'color-primitive-coral': 'var(--color-primitive-coral)',
        'color-primitive-magenta': 'var(--color-primitive-magenta)',
        'color-primitive-red': 'var(--color-primitive-red)',
        'color-primitive-cream': 'var(--color-primitive-cream)',
        'color-primitive-gold': 'var(--color-primitive-gold)',
        'color-bg-canvas': 'var(--color-bg-canvas)',
        'color-bg-surface': 'var(--color-bg-surface)',
        'color-bg-subtle': 'var(--color-bg-subtle)',
        'color-bg-invert': 'var(--color-bg-invert)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-link': 'var(--color-text-link)',
        'color-text-on-dark': 'var(--color-text-on-dark)',
        'color-interactive-primary': 'var(--color-interactive-primary)',
        'color-interactive-primary-hover': 'var(--color-interactive-primary-hover)',
        'color-interactive-accent': 'var(--color-interactive-accent)',
        'color-interactive-accent-hover': 'var(--color-interactive-accent-hover)',
        'color-border-default': 'var(--color-border-default)',
        'color-border-strong': 'var(--color-border-strong)',
        'color-border-accent': 'var(--color-border-accent)',
        'color-decor-highlight': 'var(--color-decor-highlight)',
        'color-decor-emphasis': 'var(--color-decor-emphasis)',
        'color-status-error': 'var(--color-status-error)'
      },
      fontFamily: {
        heading: ['Cabin'],
        body: ['Cabin']
      }
    }
  }
}
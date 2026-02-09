export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: number;
  tags: string[];
  cover: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "systems-for-quiet-craft",
    title: "Systems For Quiet Craft",
    subtitle: "Notes on building tools that disappear into the work.",
    date: "2025-11-12",
    readingTime: 12,
    tags: ["Design Systems", "Process"],
    cover: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 55%, #2a2a2a 100%)",
    excerpt:
      "When a tool vanishes, craft becomes visible. Here is a framework for building interfaces that stay out of the way yet remain precise and expressive.",
    content: `
## The quiet baseline

Great tooling has a paradox: the more advanced it is, the less it should be noticed. A good baseline is not minimalism, but *coherence*. Once your interface speaks in one voice, the rest can be subtle.

### What to optimize

- Latency between intent and action
- Cognitive friction at transitions
- The texture of feedback, not just the speed

## Practical heuristics

1. Make the primary action visible in the first second.
2. Use progression to reveal deeper controls.
3. Treat empty states as prompts, not placeholders.

## A small exercise

Pick a tool you use daily. Remove one label, replace it with a gesture. Does the tool still read clearly? That tension tells you where the interface actually communicates.
`,
  },
  {
    slug: "notes-on-readable-motion",
    title: "Notes On Readable Motion",
    subtitle: "Why the best animation feels like typography.",
    date: "2025-09-30",
    readingTime: 9,
    tags: ["Motion", "UI"],
    cover: "linear-gradient(135deg, #101010 0%, #1f1f1f 55%, #2f2f2f 100%)",
    excerpt:
      "Motion is not decoration. It is punctuation. This piece outlines a small grammar for timing, easing, and sequence that keeps motion legible.",
    content: `
## Motion as punctuation

Think of motion as the comma and period of your interface. It doesn't dominate the sentence; it shapes the cadence.

### Timing rules

- 120-180ms for micro transitions
- 280-420ms for layout shifts
- Never stack unrelated animations

## Sequence, not spectacle

When elements enter, make them *agree* on direction and timing. That agreement is what the eye reads as order.
`,
  },
  {
    slug: "reading-the-edges",
    title: "Reading The Edges",
    subtitle: "Collecting insights from projects that almost failed.",
    date: "2025-07-18",
    readingTime: 14,
    tags: ["Lessons", "Product"],
    cover: "linear-gradient(135deg, #0c0c0c 0%, #1b1b1b 55%, #2b2b2b 100%)",
    excerpt:
      "Failure leaves sharp data. This field note looks at near misses and the patterns that emerge when delivery is tight and attention is scarce.",
    content: `
## What failure teaches

Projects rarely fail because of a single decision. They fail from *small compounding mismatches* between expectations, resources, and timelines.

### A quick checklist

- Was the scope negotiated with the same people who do the work?
- Are you measuring one signal or three?
- Did you schedule the first demo before the second week?
`,
  },
  {
    slug: "the-power-of-constraints",
    title: "The Power Of Constraints",
    subtitle: "Why boundaries unlock better ideas.",
    date: "2025-05-06",
    readingTime: 7,
    tags: ["Creativity", "Practice"],
    cover: "linear-gradient(135deg, #0b0b0b 0%, #1c1c1c 55%, #2c2c2c 100%)",
    excerpt:
      "Constraints are not a lack of freedom; they are a design surface. Here is a lightweight way to define them without boxing in your work.",
    content: `
## The constraint canvas

Define three boundaries:

1. Time
2. Materials
3. Audience

Only after those are clear should you open the idea space.

## Why it works

Constraints make comparisons possible. Without them, every idea feels equally right because nothing is testable.
`,
  },
];

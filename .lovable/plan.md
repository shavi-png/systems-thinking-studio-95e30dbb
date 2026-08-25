# Plan: Add bold color blocks while keeping warmth restrained

## Goal
Strengthen the visual rhythm of all four pages by introducing whole-section colored "rooms" (teal, blue, dark umber) while reducing the red-brown family to only umber/ink. Keep the result noble, not muddy.

## Design decisions
- **Allowed background temperatures per page:** max 3 (light ivory, one cool room, one dark room).
- **Warm accents:** only `--umber` / `--ink` (dark rooms). Stop using `--shell-rose`, `--clay`, `--ochre`, `--nacre`, `--blush` as backgrounds or large decorative blobs.
- **New cool color:** deep teal (`--teal`, `--teal-deep`) for a fresh "room" utility that sits between the existing blue-room and dark-room.
- **Decorative shapes:** replace colored circles/dots with olive, slate, or ivory tones; keep them subtle.

## Files to change
1. `src/styles.css`
   - Add `--teal` and `--teal-deep` oklch tokens.
   - Add `@utility teal-room` with the same variable-remapping pattern as `dark-room` and `blue-room`.
   - Remove `@theme` registrations for deprecated warm tones (`shell-rose`, `clay`, `ochre`, `nacre`, `blush`) from Tailwind class generation. Keep the CSS variables only as legacy for now to avoid breaking existing references.

2. `src/routes/index.tsx`
   - Convert the FAQ section (currently `bg-paper`) to `teal-room` for a bold but cool mid-page moment.
   - Keep Hero and Final dark-room as-is.
   - Remove any remaining warm decorative blobs.

3. `src/routes/about.tsx`
   - Convert "Technology / AI" section from `bg-paper` to `teal-room`.
   - Keep "A form I keep returning to" as `blue-room`.
   - Remove or neutralize any remaining warm accent boxes.

4. `src/routes/marketing-set.tsx`
   - Convert "Why this works differently" section from `bg-paper` to `teal-room`.
   - Keep the "Where this becomes useful" as `blue-room` and offer CTA as needed.

5. `src/routes/strategic-partnership.tsx`
   - Convert "Is / Isn’t" fit section from `bg-paper` to `teal-room`.
   - Remove the `bg-sage/45` and `bg-blush/40` decorative blur blobs in that section.
   - Keep "Experience behind the work" as `blue-room` and final CTA as `dark-room`.

6. `src/components/site/Solutions.tsx`
   - Ensure the Syntez column glow uses only sage/olive/slate, no warm pink/brown.

## Verification
- Build the project and visually check all four routes in the preview.
- Confirm no red-brown appears except in umber/ink dark rooms.
- Confirm each page has at most three background temperatures.

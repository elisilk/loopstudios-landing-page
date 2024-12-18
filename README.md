# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

|        Mobile designed at 375px:         | Desktop designed at 1440px:               |
| :--------------------------------------: | ----------------------------------------- |
| ![](./screenshots/screenshot-mobile.png) | ![](./screenshots/screenshot-desktop.png) |

### Links

- Solution URL: [https://github.com/elisilk/loopstudios-landing-page](https://github.com/elisilk/loopstudios-landing-page)
- Live Site URL: [https://elisilk.github.io/loopstudios-landing-page/](https://elisilk.github.io/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography and spacing
- Accessibility
- CUBE CSS
- Sass

### What I learned

So many cool 😎 things:

- Lighthouse and PageSpeed Insights

  - [Thanks to @NikitaVologdin for the feedback and links to resources](https://www.frontendmentor.io/solutions/responsive-landing-page-using-sass-8inSDo6cyY), I spent some time improving the solution by working toward a [perfect Lighthouse score](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) on each of the 4 metrics. I didn't get to perfection, but definitely improved.
  - Comparing solutions
    - Current solution - [PageSpeed Insights Report from Dec 16, 2024, 10:47:26 AM](https://pagespeed.web.dev/analysis/https-elisilk-github-io-loopstudios-landing-page/59zwyw454b)
    - Previous solution - [PageSpeed Insights Report from Dec 16, 2024, 10:47:26 AM](https://pagespeed.web.dev/analysis/https-elisilk-github-io-loopstudios-landing-page/59zwyw454b)
  - The main areas I improved included serving images in modern formats and eliminating render-blocking resources. I list resources for each below.
  - [Serve images in modern formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/)
    - Largely followed this article on how to [Use WebP images](https://web.dev/articles/serve-images-webp)
    - Installed [`webp` precompilied utilities](https://developers.google.com/speed/webp/docs/precompiled) using [homebrew on Mac OS](https://formulae.brew.sh/formula/webp).
      - I chose not to use [ImageMagick](https://imagemagick.org/) at this time, but may explore it more in the future.
    - After running the utlity on all of the JPEG files in the design, the file size for most images was cut about in half or close to it (e.g., 28KB down to 15KB).
    - I made sure to include JPEG fallbacks for each of the webp images, both the images inline and the background images
      - [MDN Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
      - [Responsive Images 101, Part 7: Type](https://cloudfour.com/thinks/responsive-images-101-part-7-type/)
      - [Responsive Images in Practice](https://alistapart.com/article/responsive-images-in-practice/)
      - [CSS Fallbacks for WebP background images with @supports](https://www.js-craft.io/blog/css-fallbacks-for-webp-background-images-with-supports)
  - [Eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources)

    - [web.dev Learn Performance](https://web.dev/learn/performance) and [Performance](https://web.dev/performance)
    - [11 best practices to eliminate render-blocking resources](https://blog.logrocket.com/11-best-practices-eliminate-render-blocking-resources/)
    - [Optimize web fonts](https://web.dev/learn/performance/optimize-web-fonts)
    - [transfonter](https://transfonter.org/) - Thank you to [@NikitaVologdin](https://www.frontendmentor.io/profile/NikitaVologdin), I used this resource to convert the ttf files downloaded from Google Fonts into the more compressed woff2 format. In the case of this design, Alata went from 348KB down to 101KB, and Josefin Sans went from 126KB down to 23KB. So that was significant savings.

  - I made a couple of other changes based on the PageSpeed analysis.

    - "Background and foreground colors do not have a sufficient contrast ratio" (under Accessibility) - This was a fairly easy change to darken the text color a little bit, even though it kind of goes against what is called for in the design.
    - "Serves images with low resolution" (under Best Practices for the desktop version of the site) - This error seemed to be focused on the "image-interactive" in the leader section and seemed to be asking for an image option with 2x pixel density. I didn't have access to the original full-quality image and so I didn't have a way to get a true higher density version of the image. But to [practice resolution switching for display density](https://cloudfour.com/thinks/responsive-images-101-part-3-srcset-display-density/), I just created a larger version of the image (1048px x 717px) and used [`srcet`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#srcset) to give the browser the option of which image to use. And that worked!

  - Areas that I am still exploring, but was not successful at improving YET include:
    - ["Enable text compression"](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression)
    - ["Largest Contentful Paint element"](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint) (under Performance for the mobile version of the site) - This error seems to be about the header and hero section of the page. I tried to preload the image background image, but it didn't seem to help, and so I'm not sure exactly what to do next.
      - [MDN `rel=preload`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)
      - [Can I use `preload`?](https://caniuse.com/?search=preload)
      - [Preload responsive images](https://web.dev/articles/preload-responsive-images)
      - [Optimize Largest Contentful Paint](https://web.dev/articles/optimize-lcp)
      - [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp)
      - [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority)
      - [Don't fight the browser preload scanner](https://web.dev/articles/preload-scanner)
    - ["Page prevented back/forward cache restoration"](https://developer.chrome.com/docs/lighthouse/performance/bf-cache)

- [Sass](https://sass-lang.com/) - This was my first time really using Sass, a CSS preprocessor as part of Frontend Mentor's [Advanced CSS techniques](https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V). I feel like I just barely scratched the surface of this, but it was good to get the setup working and starting to get the feel of it. I used partials and a few variables. I will want to do more with nesting, mixins, and functions as a continue to make use of Sass and learn all it has to offer.
  - [Sass Crash Course](https://youtu.be/nu5mdN2JIwM?si=GWKL5R2W1x_aYY2I)
  - [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
    - [vscode-live-sass-compiler settings](https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md)
  - [Breaking Change: CSS Variable Syntax](https://sass-lang.com/documentation/breaking-changes/css-vars/)
  - [Sass and BEM for beginners](https://youtu.be/jfMHA8SqUL4?si=5eCoq7d0kS4Mr2BR)
- CSS Grid Base Layout - I am both still intrigued by but also super frustrated by a CSS grid base layout. I think the main concern I have is that when trying to implement a full width background but have the inner content be contained in the regular content area. I haven't found Kevin Powell's solution that great because it very much limits the kind of `display` value I can use for the inner section. So I still have to work through this and how I can make it a general utility that works practically in common design layouts.
  - [Layout Breakouts with CSS Grid](https://ryanmulligan.dev/blog/layout-breakouts/)
  - [A new approach to container and wrapper classes](https://youtu.be/c13gpBrnGEw?si=8mu38I0Mg0vXNgBC)
- Flow CSS Utility
  - In a similar way as the CSS Grid Base Layout, I really love the idea of a general flow/stack utility class, but find it hard to implement in practice. My main issue with this utility is when I have a `visually-hidden` div inside the flow container, it seems like the flow class continues to add a margin for that hidden element even though it shouldn't. So that's a bit frustrating and not sure how to fix it yet.
  - [Flow CSS Utility](https://piccalil.li/blog/flow-utility/)
  - [Every Layout - The Stack](https://every-layout.dev/layouts/stack/)
  - [CSS lobotomized owl selector: A modern guide](https://blog.logrocket.com/css-lobotomized-owl-selector-modern-guide/)
  - [Axiomatic CSS and Lobotomized Owls](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)
- Text on images - I have so much still to learn about using gradients generally, but I really love how putting a little darkness overlay on an image helps to make the text on top stand out and be readable. I want to get to the point where this is a regular part of my repertoire/tookit that I use often and easily implement.
  - [Using CSS gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients) -
  - [Design Considerations: Text on Images](https://css-tricks.com/design-considerations-text-images/) - which cites [7 Rules for Creating Gorgeous UI — Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96)
- [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - [Responsive Images Done Right: A Guide To `picture` And `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
- Accessibility - Still learning so much about accessibility and I admit it's hard to remember it all and get proficient in figuring out what's are the best practices. So hopefully with more practice, more of it will become second nature.
  - [WAI Menus Tutorial](https://www.w3.org/WAI/tutorials/menus/)
  - [Practical Guide on Implementing ‘aria-expanded’ in Web Development](https://www.a11y-collective.com/blog/aria-expanded/)
  - [ARIA in CSS](https://css-tricks.com/aria-in-css/)
  - [Small Tweaks That Can Make a Huge Impact on Your Website’s Accessibility](https://css-tricks.com/small-tweaks-can-make-huge-impact-websites-accessibility/)
- [Using relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) - I love using relative colors to apply an opacity to a color. But unfortunately, it seems like [relative colors are just not that well supported](https://caniuse.com/css-relative-colors) at the moment. And so for now, I will stay away from using this approach.
- [grid-auto-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
- [Using CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [:nth-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) and [:nth-last-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child)
  - [How can I target a specific column or row in a CSS grid layout?](https://stackoverflow.com/questions/46308048/how-can-i-target-a-specific-column-or-row-in-a-css-grid-layout)
- Fluid typography
  - [An accessible fluid type generator](https://fluid.style/type?min=2.25&max=4.5&min-bp=20&max-bp=77.5&unit=%22rem%22)
  - [Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html)
  - [Linearly Scale font-size with CSS clamp() Based on the Viewport](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
  - [Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
    - [Modern fluid typography editor](https://modern-fluid-typography.vercel.app/)
- Fonts and Line Height
  - [Text Crop tool](https://text-crop.eightshapes.com/?typeface-selection=google-font&typeface=Josefin%20Sans&custom-typeface-name=Helvetica&custom-typeface-url=&custom-typeface-weight=400&custom-typeface-style=normal&weight-and-style=300&size=72&line-height=1&top-crop=2&bottom-crop=18)
    - [Cropping Away Negative Impacts of Line Height](https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce)
    - [Contrast Grid tool](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) - Another very cool tool, unrelated to fonts and line height, but awesome nonetheless.
  - [How to Tame Line Height in CSS](https://css-tricks.com/how-to-tame-line-height-in-css/)
  - [Leading-Trim: The Future of Digital Typesetting](https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202)
- [Grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
  - [Why grid-template-areas are amazing | #shorts](https://youtu.be/sYDQBfSQFRI?si=GWBRt-idYdgoYdMJ)
- Visually-hidden utility class
  - [Comparing Various Ways to Hide Things in CSS](https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/)
  - [The anatomy of visually-hidden](https://www.tpgi.com/the-anatomy-of-visually-hidden/)
  - [CSS in Action: Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/)
  - [Visually hidden content is a hack that needs to be resolved, not enshrined](https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html)
  - [Design vs. accessibility and the CSS visually-hidden class](https://blog.logrocket.com/design-accessibility-css-visually-hidden-class)

### Continued development

Specific areas that the solution should be improved (known issues):

- Turn the header into some sort of sticky header that stays around as the user scrolls down the page (at least in the mobile view). Seems a little tricky because the header includes both the top part (the logo and primary nav), which is what I want to be sticky, and the hero content, which should not be sticky. But both parts share the same background image. Might also want the top part to transition from the background image to an all black background as the user scrolls up and the background image is scrolled out the viewport. So how do all that? Will have to think about it a bit more and come back to it.
  - [`position: sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)
  - [Sticky Headers And Full-Height Elements: A Tricky Combination](https://www.smashingmagazine.com/2024/09/sticky-headers-full-height-elements-tricky-combination/)
  - [Google "change header background color on scroll css"](https://www.google.com/search?q=change+header+background+color+on+scroll+css)
- [<figcaption>: The Figure Caption element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) - Consider using this for the card images.
- Add some transition effects, especially for hovering over the links
- Implement some more of Sass functionality, especially [extend/inheritance](https://sass-lang.com/guide/#inheritance).

More general ideas I want to consider:

Hmm 🤔 ...

### Useful resources

- [Kevin Powell on YouTube](https://www.youtube.com/@KevinPowell) - He's the best.
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)

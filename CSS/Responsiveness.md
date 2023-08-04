# Responsiveness

- Landscape => width > height
- Portrait => height> width

## Units

- px (fixed)
- % ( % of the size of the parent)
- vw - viewporth width ( depends on the width of screen)
- vh - view port height
- vmax, vmin

- Use fonts and inner divs in % and vw and vh

## media

- max width==600px (whatever we write in this will be applicable to screen width <=600px)
- 600px or 550px for protrait devices

## Checks

- Flexbox or grid
- Responsive Typography
- Mobile first Approach
- Flexible Images and Media

## Navbar

- Main div
  - width - 100%
  - Height set fixed height
  - display `flex`
  - justify `between `
  - align `center`
  - padding: 0 3vw
- Nav logo
  - height and width in % or vw
- Nav items
  - flex
  - gap
  - align-center
  - Menu items
    - display none initially
    - in media display block and the rest of the things display none

- Media 
  - adjust the font sizes
  - set the height according to the smaller screens



## Content
- we have given the navbar 100px and the total body height is 100%
- Now inorder to give the content the size of the body without scrollbar or anything use `calc(100% - 100px)`



## Tailwind css
- sm - "640px"
- md - "768px"
- lg - "1024px"
- xl - 1280px
- 2xl - 1536px
- media sm, => it applies for sm and `above`
black

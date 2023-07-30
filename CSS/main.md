
# Cascading style sheets

- [Cascading style sheets](#cascading-style-sheets)
  - [Types](#types)
  - [Selectors](#selectors)
  - [Fonts](#fonts)
  - [colors](#colors)

## Types

- **inline**
  ```html
  <p style="color:blue;">paragraph</p>
  ```
- **internal** - adding style tag in the `head` of html
  ```css
  <style>
  p{
      color:yellow;
  }
  </style>
  ```
- **External CSS** - adding a separte style sheet named with extension `.css` and linking to head using `href` in html
- inline css > internal css or external css (these two depends on order)
- if we want internal css to dominate over inline css just use after the property `!important`
- ```css
    <style>
    p{
        color:yellow!important;
    }
    </style>
  ```

- The `href` attribute tells the browser where to navigate

## Selectors

- element - `p, a, div, h1`
- id - `#` The id attribute is used to uniquely identify a single HTML element
- class - `(.)` The class attribute is used to group elements that share similar characteristics or styles
- group -` (using ,)` to style multiple things at once
- Order of specivity
- _inline(using style)> id> classname> tagname> universal selectors( _ )and pseudo classes ( :pseudo-class) > pseudo-element(::pseudo-element)\*


## Fonts 
- font style=> italic, bold etc..
- 1 px = 1/96 of inch
- font weight - thickness of text (degree of blackness and boldness)
- line height - gap between two lines
- font family- mostly used are `web-safe fonts` aka `system fonts`

- `google fonts`- google fonts
- `link of font` and `font-family`

## colors
- Types
  1. named - red, yellow etc..
  2. rgb - rgb(0,0,0) [0,255] red, green, blue
  3. rgba - red, green, blue, alpha( transperancy)
  4. hex - #ffab01 => (ff-red,ab-green, 01-blue) if two more are added that is transperancy
  5. hsl - (hue saturation and lightness)

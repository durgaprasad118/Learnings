# Custom fonts
- go to google fonts selct font and size
- from import copy it and paste in `main style sheet`
- Next do this in the same file
```css
@layer base{
    html{
        font-family: 'Montserrat Alternates', sans-serif;
       font-family: 'Great Vibes', cursive;
    }
}
```
- go to tailwind config below `extend:{}` do this
```css
 fontFamily:{
      signature:['Great Vibes'],
      mont:['Montserrat Alternates']
    }
```

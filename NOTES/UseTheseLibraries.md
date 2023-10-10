# Must use Libraries for react projects

## Animate On Scroll

- [Website](https://michalsnik.github.io/aos/)

- install

```js
import Aos from 'aos'
import 'aos/dist/aos.css'
```

- Where ever you want to initialise it

```js
useEffect(() => {
  Aos.init(`here you can pass duration or effects`)
}, [])
```

- in the required tags use the required amimation

1. `<div data-aos="zoom-in"></div>`
2. `<div data-aos="flip-up"></div>`

## React-toastify

- install react-toastify
  `npm install --save react-toastify`
-

- in main.jsx

```js
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
)
```

- Where you want to use
  `import { toast } from 'react-toastify`

- just call this
- This can be customised according to our wish

```js
toast.success(`converted ${from} to ${to} `, {
  position: 'top-right',
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
})
```

## React icons

- install what all you need for the app

```js
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillCheckCircleFill,
  BsFillBackspaceReverseFill,
} from 'react-icons/bs'
```

- use where ever you need
- we can also add custom css
  `<BsFillEyeFill className="xyz"/>`

## Neumorphism CSS

- it has buttons
- Cards
- inputs
- loaders

## For good backgrounds

- [herosection](https://heropatterns.com/)
- [desiging page use svg](https://app.haikei.app/)
- [color](https://htmlcolorcodes.com/)






## Good websitess
- astro
- we make devs
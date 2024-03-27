- [filter using button](#filter-using-button)
  - [important thing](#important-thing)
- [Search input](#search-input)

## filter using button

1. using `useState()` declare a variable set the initial data => `reference don't modify`
2. declare another state variable using `useState()` and set it's value equal to the initial value
3. Now on clicking the button
4. declare another varible and from the initial state varible filter the requried data
5. now set the filterd data to the second variable
6. DONE

### important thing

- if we do like this it goes in infinte loop
- to avoid this we ned to set the 2nd list using useEffect(set,[initial list])
- when ever the list is fetched the 2nd gets updated

```js
const list = useGetData(); // fetching from custom hook using api
const [filter, setFilter] = useState([]); //for filtering
// we use useEffect to add the list to filter
// dependency array as the list => whenever it is fetched the filtered list is filled up
useEffect(() => {
  setFilter(list);
}, [list]);
```

## Search input

- create a state varible with initial value as empty string

```js
const [text, setText] = useState("");
```

- keep the value of `input to the above variable`
- Now onChange

```js
<input
  type="text"
  value={text}
  placeholder="Enter text"
  onChange={(s) => {
    const written = s.target.value;
    setText(written);
    // filtering based on search
    const writenfilter = list.filter((x) => {
      return x?.title.toLowerCase().includes(written.toLowerCase());
    });
    setFilter(writenfilter);
  }}
/>
```

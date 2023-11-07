# React Coach Mark Bug Demo

Install the project

```
pnpm install

or

npm install
yarn install
```

This is to document what seems to be an issue with the Coach on initial render. The code that is a work around for now can be found in `main.jsx` on lines `17-26`.

```
// NOTE: Un-comment the lines below to get the Coach to show up.
const [status, setStatus] = useState('init');
useEffect(() => {
  setTimeout(() => {
    setStatus('show');
    setTimeout(() => {
      setStatus('ready');
    });
  });
}, []);
```

It basically just changes the state through async timeout calls to give React the signal to force a render and allow the Coach to show up on intialization of the main dom.

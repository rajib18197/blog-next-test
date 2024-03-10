---
title: "Wasted Renders in React"
date: "2024-03-10"
---

> **In react, a parent component re-render causes all of it's child components (If any) to re-render as well even when the props remains unchanged.** In "the react territory" they assume that components we write in terms of rendering process are always pure.

Since that's not always possible as **we can make components impure by JavaScript built in natives** such as `Date()` Object and by other things if the need arises and react also gave us some escape hatches (e.g. `useRef()`, `useEffect()` etc.) to execute "_on the side_" works apart from a component's main work.

So to avoid stale data in the UI, React plays it safe and re-render all the children. In Certain situations some re-renders cause visible lag in the UI as the component does some heavy lifting work during the process of rendering.

> **Outlining the situation be like- React invokes your component function, calculates expensive operations, does all the diffing related stuff and only to see in the end nothing has changed. All of the operations, yes needless operations. In technical terms this is called wasted render.**

So to prevent that, One solution could be to wrap the component with `memo()` which make sure component only re-render when props changed or the context it subscribed to changed or its own state has changed. That would be a nice solution to prevent that visible lag.

### `1` Calculate Age in JavaScript

```JS
const calcAge = function(age){
    return 2020 - age;
}
```

---

### `2` the following sketch for what the DOM should look like:

```JS
<main>
  <p>
    <span class="prefix">Count:</span>
    0
  </p>
  <button>
    Increment
  </button>
</main>
<footer>
  <p>Copyright 2024 Big Count Inc.</p>
</footer>
```

Another solution would be to compose components in a better way by leveraging children prop. But again that's not possible sometimes.

𝑨𝒍𝒓𝒊𝒈𝒉𝒕, 𝑻𝒉𝒂𝒕'𝒔 𝒊𝒕 𝒇𝒐𝒓 𝒕𝒐𝒅𝒂𝒚! 𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒓𝒆𝒂𝒅𝒊𝒏𝒈 📖.

---
title: Framing State Design
date: "2024-03-18"
---

State let component remember information and we need it when a certain user action needs to change data from one value to other value.

When Designing state in React Apps I follow a couple of guidelines that might be helpful for you:

1. 𝐎𝐮𝐭𝐥𝐢𝐧𝐞 𝐔𝐬𝐞𝐫𝐬 𝐁𝐞𝐡𝐚𝐯𝐢𝐨𝐫𝐬 𝐚𝐧𝐝 𝐜𝐨𝐧𝐬𝐞𝐪𝐮𝐞𝐧𝐜𝐞𝐬

The first step is to write all the steps users will do and what are the results they will see by using that component. This will force us to think about deeply what our component’s purpose actually is.

So we observed what are the commands that can be given by users as they interact with that component on the screen and what are the responses they got.

2. 𝐈𝐦𝐦𝐞𝐫𝐬𝐞 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐢𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐚𝐧𝐠𝐞𝐬

We need to set a specific intention here and don’t let ourselves be distracted by what is static in that component.

Our only awareness here should be what is changing on the screen and remove static parts from our mind. This leads us to narrow down our focus to one thing only and simplify things.

Alright, that's for state design. Time for think of a few strategies of where to place a state: Ask Yourself,

⇒ which other components need that state? If the answer is 0, then place that state only in that component and we are done.

⇒ Does that state needed by many different components such as - children, sibling, parent - then it’s a global state.

𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒓𝒆𝒂𝒅𝒊𝒏𝒈 📖. 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒈𝒐𝒕 𝒔𝒐𝒎𝒆 𝒎𝒆𝒂𝒏𝒊𝒏𝒈𝒇𝒖𝒍 𝒊𝒏𝒔𝒊𝒈𝒉𝒕𝒔 𝒂𝒃𝒐𝒖𝒕 𝒔𝒕𝒂𝒕𝒆 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕.

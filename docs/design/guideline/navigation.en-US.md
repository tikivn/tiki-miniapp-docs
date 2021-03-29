---
order: 20
category: Design Guidelines
title: Navigation
---

## Tiny official navigation bar
The navigation bar is uniformly provided by the framework by default, and designers cannot customize its position and style.

<img class="img-basic" src="https://salt.tikicdn.com/ts/social/e0/09/8d/543564dfdf4b46456afff669dcd7330c.png" alt="navigation" width="100%" />


## Navigation behaviours

The Navigation box included 2 elements: More & Close icon.
- Click More icon to display the system menu sheet.
<img class="img-basic" src="https://salt.tikicdn.com/ts/social/37/b6/92/d07c55ff15341b918570238109ed4e5e.png" alt="more icon" height="400px" />
<br />

- Click Close icon to exit the current MiniApp.
<img class="img-basic" src="https://salt.tikicdn.com/ts/social/ea/80/ec/53b8b14009c6e3b13bcfc742c78c083f.png" alt="close icon" height="400px" />
<br />

The Return action has 2 cases:
- At the homescreen of the current MiniApp, the navigation action always be hidden.
- When the user go deeper in the app, the Back icon was appeared to help user can return to the previous screen.
    > *Attention: The return action should always be the Back icon. Do not use the Close icon to make users confuse with the Close icon at Navigation box.*

    <img class="img-basic" src="https://salt.tikicdn.com/ts/social/03/b3/e5/c7bdf880a5699915f0abd87f352834ca.png" alt="return" height="400px" />

<br />

The Add-on action is optional, you will need the add-on action when your app has the main feature need to be stick on all screen (e.g: search feature) but we don't recommend to use the add-on action to make users feel overwhelmed about your app navigation.

## Color scheme of the navigation bar
We provide 3 type of color schemes of the navigation bar. You can choose the color scheme to adapt to your brand color style.

<img class="img-basic" src="https://salt.tikicdn.com/ts/social/bd/42/2d/edd48b8f3dd6972bc561a750d7826c3b.png" alt="color scheme" width="500px" />

- Default background
- Light color background
- Dark color background
> *Attention: You can change the background color to any color you want. The system will automatically adjust the color of the title and icons to fit with the color scheme.*
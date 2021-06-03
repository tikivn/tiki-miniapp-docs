---
order: 20
category: Design Guidelines
title: Navigation
---

## Tini official navigation bar

The navigation bar is uniformly provided by the framework by default, and designers cannot customize its position and style. <br />
<img className="img-basic" src="https://salt.tikicdn.com/ts/social/e0/09/8d/9b0cdc4c0aea07794f05f290ec9bfccf.png" alt="navigation" />

## Navigation behaviours

The Navigation box included 2 elements: More & Close icon.

- Click More icon to display the system menu sheet. <br />
  <img className="img-basic" src="https://salt.tikicdn.com/ts/social/02/55/21/6748800424e706db6c80b3cf03767cfd.png" alt="more icon"/>

- Click Close icon to exit the current Tini App.
  <img className="img-basic" src="https://salt.tikicdn.com/ts/social/ea/80/ec/53b8b14009c6e3b13bcfc742c78c083f.png" alt="close icon" /> <br />

The Return action has 2 cases:

- At the homescreen of the current Tini App, the navigation action always be hidden.
- When the user go deeper in the app, the Back icon was appeared to help user can return to the previous screen.

  > _Attention: The return action should always be the Back icon. Do not use the Close icon to make users confuse with the Close icon at Navigation box._

    <img className="img-basic" src="https://salt.tikicdn.com/ts/social/03/b3/e5/c7bdf880a5699915f0abd87f352834ca.png" alt="return" />

The Add-on action is optional, you will need the add-on action when your app has the main feature need to be stick on all screen (e.g: search feature) but we don't recommend to use the add-on action to make users feel overwhelmed about your app navigation.

## Color scheme of the navigation bar

We provide 3 type of color schemes of the navigation bar. You can choose the color scheme to adapt to your brand color style.

<img className="img-basic" src="https://salt.tikicdn.com/ts/social/bd/42/2d/edd48b8f3dd6972bc561a750d7826c3b.png" alt="color scheme" />

- Default background
- Light color background
- Dark color background
  > _Attention: You can change the background color to any color you want. The system will automatically adjust the color of the title and icons to fit with the color scheme._

---
title: Debugging
---

## Compiler Log

The name speaks for itself. The syntax and framework errors are found here.

To see the Compiler Log, select **Compiler Log** from the **Tools** menu.

## DevTools

Tini Studio DevTools is a set of tools assisting programmers to identify the issues that the application is facing.

To open DevTools, do either of the following:

- Select **Developers Tool** from the **View** menu.
- Click the **DevTools** button below the main menu.

The working and functionality of Tini Studio DevTools are similar to those of Google Chrome DevTools. So you can further to [Chrome DevTools](https://developer.chrome.com/docs/devtools/).

### Common tools

#### Elements

When you click an element in the simulator, the TXML and TCSS source code of the element will be loaded into the **Elements** tab.

#### Console

This tool lists out JavaScript errors occurring during the app execution. When you click a particular error, the file containing the errors will be opened on the Sources tab.  

More interestingly, you are able to execute a JavaScript code block so as to interact with the running app.

#### Sources

You can open the project’s Javascript file on this tab, adding breakpoints/debuggers to the file. 

#### App Log

It lists out JSAPIs that are called in real time alongside their sent and response data. 
Network

It is used to monitor the network activity of the app.

- **Request information** sent by the app to the server, including URL, request status and response time.
- **Resources**, such as images, videos and js, downloaded from the server. 

### Showing more tools

1. Click the vertical three dots (⋮) at the top right corner of the DevTools panel. The contextual menu appears.
2. On the contextual menu, point to **More tools**, and then select the desired tool. 

### Command menu

The Command menu offers a quick way to access the set of commands of DevTools, such as commands for unhiding tools.

There are two ways to open the contextual menu:

- Way 1: Click the vertical three dots (⋮) at the top right corner of the DevTools panel. 
- Way 2: Press the three combination keys **Ctrl + Shift + P**.

## Remote Debugging

It enables developers to test an app on mobile devices without uploading the app to the Dev Center.


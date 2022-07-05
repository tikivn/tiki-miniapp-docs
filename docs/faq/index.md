---
title: Các câu hỏi thường gặp (FAQ)
---

<!--
  Usage
    - Create new file with prefix `_`
    - Import file and toc
    - Append toc in toc array
    - Edit file and enjoy
-->

import General, {toc as GeneralTOC} from './\_general.md'
import Backend, {toc as BackendTOC} from './\_backend.md'
import Studio, {toc as StudioTOC} from './\_studio.md'
import Framework, {toc as FrameworkTOC} from './\_framework.md'
import Components, {toc as ComponentsTOC} from './\_components.md'
import JSAPI, {toc as JSAPITOC} from './\_jsapi.md'

<General/>

---

<Backend/>

---

<Studio/>

---

<Framework/>

---

<Components/>

---

<JSAPI/>

export const toc = [...GeneralTOC, ...BackendTOC, ...StudioTOC, ...FrameworkTOC, ...ComponentsTOC, ...JSAPITOC];

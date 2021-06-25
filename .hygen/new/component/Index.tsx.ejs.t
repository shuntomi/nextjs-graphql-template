---
to: <%= targetDir %>/index.tsx
---

<% if (have_container) { -%>
export { Container as <%= name %> } from './container';
<% } else { -%>
export { Presenter as <%= name %> } from './presenter';
<% } -%>

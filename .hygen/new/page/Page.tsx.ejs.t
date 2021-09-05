---
to: <%= targetDir %><%= name %>.tsx
---

import React from 'react';

const <%= name.charAt(0).toUpperCase() + name.slice(1) %>: React.VFC = () => <p>sample</p>

export default <%= name.charAt(0).toUpperCase() + name.slice(1) %>

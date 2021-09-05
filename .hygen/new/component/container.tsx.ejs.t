---
to: "<%= have_container ? `${targetDir}/container.tsx` : null %>"
---

import React from 'react';
import { Presenter } from './presenter';

export const Container: React.VFC = () => <Presenter />;

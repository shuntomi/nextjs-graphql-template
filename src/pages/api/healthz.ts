/**
 * @summary k8sのヘルスチェック用ページ
 */

import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-default-export
export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).end('OK');
};

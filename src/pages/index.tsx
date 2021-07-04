import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pagesPath } from '../lib/$path';

export default function Index(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    // TODO: ログインチェックを行ってhomeかログインへ飛ばす
    router.push(pagesPath.login.$url());
  }, [router]);

  return <></>;
}

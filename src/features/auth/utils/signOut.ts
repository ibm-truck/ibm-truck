import { signOut } from 'next-auth/react';

interface handleSignOutType {
  callBack?: () => void;
  callbackUrl: string;
}
export default async function handleSignOut({
  callbackUrl,
  callBack
}: handleSignOutType) {
  await signOut({
    callbackUrl,
    redirect: true
  }).then(() => {
    if (callBack) {
      callBack();
    }
  });
}

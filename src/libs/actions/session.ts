'use server';
import { cookies } from 'next/headers';

import { DTO } from '@tot/core/types';
import { env, Utils } from '@libs';
import { revalidatePath } from 'next/cache';

const _sessionCookieName = 'UAS_TOT';
export async function setupSession(user: DTO.IUserDTO) {
  const cookiesList = cookies();
  const _hash = Utils.createEncodedHash(user, ',', env.HASH_SECRET);

  if (Utils.cleanEmpty(user))
    if (
      !cookiesList.has(_sessionCookieName) ||
      (cookiesList.has(_sessionCookieName) &&
        !Utils.isValidEncodedHash(user, ',', env.HASH_SECRET, cookiesList.get(_sessionCookieName)?.value || ''))
    ) {
      revalidatePath('/');
      return cookiesList.set({
        name: _sessionCookieName,
        value: _hash,
        path: '/',
        secure: env.SITE_DOMAIN.startsWith('https://'),
      });
    }
}

export async function clearSession() {
  if (cookies().has(_sessionCookieName)) cookies().delete(_sessionCookieName);
}

export async function isSessionActive() {
  return cookies().has(_sessionCookieName);
}

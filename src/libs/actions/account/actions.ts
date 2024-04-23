'use server';

import { revalidatePath } from 'next/cache';

import { DTO } from '@tot/core/types';

import { client } from '../client';
import { Schema } from './schema';
import { clearSession } from '../session';
import { cache } from 'react';

export const signUp = client(Schema.signUp, async (inputs, { _context }) => {
  const { email, password, firstName, lastName } = inputs;
  return _context.accountServices?.requestContactRegistration(email, password, firstName, lastName);
});

export const checkEmailUniqueness = client(Schema.checkEmailUniqueness, async (email, { _context }) => {
  return _context.accountServices?.checkEmailUniqueness(email);
});

export const login = client(Schema.login, async (inputs, { _context }) => {
  const { email, password } = inputs;
  const result = await _context.accountServices?.login(email, password);
  if (result?.data?.accessToken) revalidatePath('/');
  return result;
});

export const refreshToken = client(Schema.refreshToken, async (refreshToken, { _context }) => {
  const result = await _context.accountServices?.getTokenByRefreshToken(refreshToken);
  if (result?.data?.accessToken) revalidatePath('/');
  return result;
});

export const getCurrentUser = client(Schema.getCurrentUser, async (inputs, { _context }) => {
  return _context.accountServices?.getCurrentUser();
});

export const logout = client(Schema.logout, async (inputs, { _context }) => {
  const _clearSession = await clearSession();
  revalidatePath('/');
  return true;
});

export const getContactDetails = client(Schema.getContactDetails, async (memberId, { _context }) => {
  return _context.accountServices?.getContact(memberId);
});

export const updateContact = client(Schema.updateContactInput, async (inputs, { _context }) => {
  const { email, id, firstName, lastName, birthDate, phone } = inputs;

  const updateContactStatus = await _context.accountServices?.updateContact(
    id,
    firstName,
    lastName,
    phone,
    email,
    birthDate,
  );

  if (!updateContactStatus?.error && updateContactStatus?.data?.id)
    revalidatePath('/[locale]/(public)/(container)/profile/account', 'page');

  return updateContactStatus;
});

export const changePassword = client(Schema.changePassword, async (inputs, { _context }) => {
  const { id, currentPassword, newPassword } = inputs;
  return _context.accountServices?.changeLoggedInUserPassword(currentPassword, newPassword, id);
});

export const getMyAddresses = client(Schema.getMyAddress, async (inputs, { _context }) => {
  const { first, after, sort } = inputs || {};
  return _context.accountServices?.getMyAddresses(after, first, sort);
});

export const deleteMyAddress = client(Schema.deleteMyAddress, async (inputs, { _context }) => {
  const { memberId, address } = inputs || {};
  const response = await _context.accountServices?.deleteMemberAddress(memberId, address as DTO.IMemberAddressDTO);
  if (response?.data) revalidatePath('/[locale]/(public)/(container)/profile/address', 'page');
  return response;
});

export const addMyAddress = client(Schema.addMyAddress, async (inputs, { _context }) => {
  const { memberId, address } = inputs || {};
  const response = await _context.accountServices?.addMemberAddress(memberId, address as DTO.IMemberAddressDTO);
  if (response?.data) revalidatePath('/[locale]/(public)/(container)/profile/address', 'page');
  return response;
});

export const updateMyAddress = client(Schema.updateMyAddress, async (inputs, { _context }) => {
  const { memberId, address } = inputs || {};
  const response = await _context.accountServices?.updateMemberAddress(memberId, address as DTO.IMemberAddressDTO);
  if (response?.data) revalidatePath('/[locale]/(public)/(container)/profile/address', 'page');
  return response;
});

export const requestPasswordReset = client(Schema.requestPasswordReset, async (inputs, { _context }) => {
  const { email, state, prefixLocale } = inputs || {};
  return _context.accountServices?.requestPasswordReset(email, state, prefixLocale);
});

export const requestDefaultWishlist = client(Schema.requestDefaultWishlist, async (inputs, { _context }) => {
  return _context.accountServices?.requestDefaultWishlist();
});

export const addWishlistItem = client(Schema.addWishlistItem, async (inputs, { _context }) => {
  const { listId, productId, quantity } = inputs;
  const response = await _context.accountServices?.addWishlistItem(listId, productId, quantity);
  if (response?.data) {
    revalidatePath('/[locale]/(public)/(container)/profile/wishlist', 'page');
    revalidatePath('/[locale]/(public)/(container)/list/[[...path]]', 'page');
    revalidatePath('/[locale]/(public)/(container)/product/[...slug]', 'page');
  }
  return response;
});

export const removeProductFromWishlist = client(Schema.deleteWishlistItem, async (inputs, { _context }) => {
  const { listId, productId } = inputs;
  const response = await _context.accountServices?.removeProductFromWishlist(listId, productId);
  if (response?.data) {
    revalidatePath('/[locale]/(public)/(container)/profile/wishlist', 'page');
    revalidatePath('/[locale]/(public)/(container)/list/[[...path]]', 'page');
    revalidatePath('/[locale]/(public)/(container)/product/[...slug]', 'page');
  }
  return response;
});

export const getDefaultWishlist = cache(
  client(Schema.getDefaultWishlist, async (inputs, { _context }) => {
    return _context.accountServices?.getDefaultWishlist();
  }),
);

export const addReview = cache(
  client(Schema.addReview, async (inputs, { _context }) => {
    const { userName, entityId, entityType, entityName, title, review, rating, pathName } = inputs;
    const response = await _context.accountServices?.createReview(
      userName,
      entityId,
      entityType,
      entityName,
      title,
      review,
      rating,
    );

    if (response?.data) revalidatePath(pathName);

    return response;
  }),
);

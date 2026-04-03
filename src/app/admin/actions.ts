'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (username === validUsername && password === validPassword) {
    // Generate a simple token (in production, use JWT or a proper session store)
    const token = Buffer.from(`${username}:${process.env.JWT_SECRET}`).toString('base64');
    
    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    });

    redirect('/admin');
  } else {
    // Basic redirect back to login with error (handled via URL params or just re-render)
    // For simplicity, we just throw an error or redirect to login.
    redirect('/admin/login?error=Invalid+credentials');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/admin/login');
}

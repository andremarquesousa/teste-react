'use client';
import { redirect } from 'next/navigation';

const Initial = ({ params }) => {
  console.log('oi');
  redirect('/home');
}

export default Initial;
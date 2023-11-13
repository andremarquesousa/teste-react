'use client';
import { redirect } from 'next/navigation';

const Initial = ({ params }) => {
  redirect('/home');
}

export default Initial;
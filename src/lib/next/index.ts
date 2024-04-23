import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const interFont = Inter({ subsets: ['latin'] });

export { Metadata, interFont, Link as NextLink };

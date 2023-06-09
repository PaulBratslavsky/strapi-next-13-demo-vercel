import React from 'react';

export const metadata = {
  title: 'Blog Page',
  description: 'Check out some of our awesome blog posts!',
};

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}

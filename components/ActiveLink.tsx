import { CSSProperties, FC } from 'react';
import { useRouter } from "next/router"
import Link from 'next/link';

const style:CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontSize: '1.1rem',
}

interface Props {
  text:string, // Si tiene ? es obligatorio
  href:string,
}

export const ActiveLink:FC<Props> = ({ text, href }) => {
  
  const { asPath } = useRouter();

  return (
    <Link href={ href }>
      <a style={ href === asPath ? style : undefined }>{text}</a>
    </Link>
  );
}

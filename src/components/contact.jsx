import ClipboardJS from "clipboard"
import { FaWhatsapp } from "react-icons/fa";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import '../styles/components/contact.scss'
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
    const [copy, setCopy] =useState(false)

    const handleClickWP = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=5521999331334&text=Texto%20aqui'
    }
    const handleClickWPEnglish = () => {
      window.location.href="https://api.whatsapp.com/send?phone=17816085757&text=Texto%20aqui"
  }
    const emailRef = useRef(null);

    const handleCopy = () => {
        setCopy(true)
        const timeoutDuration = 1500;

        setTimeout(() => {
            setCopy(false);
        }, timeoutDuration);
    }
    

    useEffect(() => {
      new ClipboardJS(emailRef.current, {
        text: () => 'contato@movieit.com.br',
      }).on('success', handleCopy);
    }, []);

  return (
    <section className='adress'>
        <a href="#!" ref={emailRef} data-clipboard-text="contato@movieit.com.br" >
        contato@movieit.com.br
      </a>
      {copy === true?<p className="toast-email">O email foi copiado!</p>:''}
        <a onClick={handleClickWP}>(021) 99933-1334{""}<FaWhatsapp onClick={handleClickWP} />{""}<GiBrazilFlag /></a>
        <a onClick={handleClickWPEnglish}>{' '}+1 781 608 5757<FaWhatsapp onClick={handleClickWPEnglish}/><GiUsaFlag /></a>
    </section>
  )
}

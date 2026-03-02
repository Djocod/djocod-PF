import React, { useEffect, useRef } from "react";
import link from "../json/link.json";

const FrontMent = () => {
  const fmScroll = useRef(null);
  useEffect(() => {
    const fmUl = fmScroll.current;
    if (!fmUl) return;
    const onScroll = (e) => {
      const scrollul = fmUl.scrollWidth > fmUl.clientWidth;
      if (!scrollul) return;
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        fmUl.scrollLeft += e.deltaY;
      }
    };
    fmUl.addEventListener("wheel", onScroll, { passive: false });
    return () => fmUl.removeEventListener("wheel", onScroll);
  }, []);

  return (
    <section className="front-Ment" id="front">
      <ul className="fm-ul-container" ref={fmScroll}>
        {link
          .filter((link) => link.id >= 3 && link.id <= 7)
          .map((link) => (
            <li key={link.id} className="fm-items">
              <h3 className="fm-title">{link.title}</h3>
              <a href={link.href} target="_blank" rel="noreferrer">
                <img
                  className="img-fm"
                  src={link.img}
                  alt={`you watch ${link.title} template`}
                />
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default FrontMent;

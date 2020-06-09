import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from 'react';
import styled from 'styled-components';
import DefaultImage from '../../assets/card_placeholder.png';

const CardImage = styled('img')`
  display: flex;
  flex: 1;
  max-height: 11.25rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1.25rem 1.25rem 0 0;
  &:focus {
    opacity: 0.75;
  }
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
  &:active {
    opacity: 0.75;
  }
`;

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const LOAD_IMG_EVENT_TYPE = 'loadImage';

export default function Image({ src, style, ...props }: Props): ReactElement {
  let observer: IntersectionObserver | null = null;
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }
    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        // 확인을 위해 이미지 절반이 나타날 때 로딩한다.
        threshold: 0.5,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  function onIntersection(
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
      }
    });
  }

  return (
    <CardImage {...props} ref={imgRef} src={isLoad ? src : DefaultImage} />
  );
}

Image.defaultProps = {} as Partial<Props>;

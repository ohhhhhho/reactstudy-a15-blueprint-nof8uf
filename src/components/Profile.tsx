import styled from 'styled-components';
interface ImgProps {
  src: string;
  alt: string;
}
interface SpanProps {
  $textColor: string;
}
const Img = styled.img<ImgProps>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
const Span = styled.span<SpanProps>`
color:${(props) => props.$textColor}
`;
const Profile = ({ src, alt, text, $textColor }) => {
  return (
    <>
      <Img src={src} alt={alt} />
      <Span $textColor={$textColor}>{text}</Span>
    </>
  );
};
export default Profile;

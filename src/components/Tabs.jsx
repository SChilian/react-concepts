export default function Tabs({ children, content, ContentContainer = "menu" }) {
  return (
    <>
      <ContentContainer>{content}</ContentContainer>
      {children}
    </>
  );
}

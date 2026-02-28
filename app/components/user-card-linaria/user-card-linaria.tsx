import * as Styled from './user-card-linaria.styled';
import { Button } from '@plarium/d2c-ui-kit';

export const UserCardLinaria = () => {
  return (
    <div>
      <Styled.Title>Title</Styled.Title>
      <div>
        <Button color="primary">Button</Button>
      </div>
      <p>
        Hello, I'm a user card styled with Linaria! This is a simple component to demonstrate how to
        use Linaria for styling in a Next.js application. You can customize this card with your own
        styles and content as needed.
      </p>
    </div>
  );
};

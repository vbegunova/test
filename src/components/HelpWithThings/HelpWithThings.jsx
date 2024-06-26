import sprite from '../../images/sprite.svg';
import {
  Container,
  FirstText,
  Image,
  Section,
  Subtitle,
  Text,
  Title,
} from './HelpWithThings.styled';

const HelpWithThings = () => {
  return (
    <Section>
      <Container>
        <Title>Допогти речами</Title>
        <Subtitle>
          Як ваші пожертви можуть полегшити життя безпритульних тварин?
        </Subtitle>
        <FirstText>
          Ваші дії можуть мати велике значення для безпритульних тварин, навіть
          якщо ви не можете прийняти участь у волонтерській роботі особисто.
          Допомогти речами - це простий і ефективний спосіб підтримати тих, хто
          знаходиться в складній життєвій ситуації. Від збору корму та
          медикаментів до пожертвування необхідних матеріалів для утримання та
          лікування тварин - ваш внесок може зробити справжню різницю. Навіть
          невеликі пожертви можуть мати велике значення, тому що кожен предмет
          або матеріальна допомога додається до загального зусилля забезпечити
          тваринам необхідні умови і допомогти їм знайти новий дім. Приєднуйтесь
          до нас у цьому благородному завданні і допоможіть створити краще
          майбутнє для безпритульних тварин!
        </FirstText>
        <Text>
          Допомогу можна відправити Новою поштою: м. Харків, відділення НП №33,
          +38 (066) 345 67 89, Іванов Іван Іванович. 
        </Text>
        <Image>
          <use href={`${sprite}#icon-helpThings`}></use>
        </Image>
      </Container>
    </Section>
  );
};

export default HelpWithThings;


import styled from "styled-components";
import Star from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
width:80%;
height: 110px;
background-color:#008080;
border-radius: 10px;
justify-content: center;
align-items:center;
margin-top: 30px;
`;

const NameTitleView = styled.View`
   width:100%;
`; 

const NametitleText = styled.Text`
text-align: center;
font-size: 20px;
color:#fff;
font-weight: bold;
`;

const Text = styled.Text`
 font-size: 18px;
 color: #fff;
`; 

const Testimonial = styled.View`
 width: 100%;
`;

const TestimonialText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;

const StartView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items:center;
`;

const Item = styled.View`
 margin: 5px;
`;



export default ({ client, commentary, note}) =>{

  return (
      <Container>

           <NameTitleView>
                 <NametitleText>{client}</NametitleText>
           </NameTitleView>
            <Testimonial>
              <TestimonialText>{commentary}</TestimonialText>
            </Testimonial>
           <StartView>
              <Text>Avaliação: </Text>
              <Item>
                  <Star name="star" size={16} color="#FF8C00"/>
              </Item>
               <Item>
                  <Star name="star" size={16} color="#FF8C00"/>
               </Item>
               <Item>
                 <Star name="star" size={16} color="#FF8C00"/>
               </Item>
               <Item>
                 <Star name="star" size={16} color="#FF8C00"/>
               </Item>
               <Item>
                 <Star name="star" size={16} color="#FF8C00"/>
               </Item>
           </StartView>
      </Container>
  )

}
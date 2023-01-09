import styled from "styled-components"
import Star from 'react-native-vector-icons/FontAwesome';

const StarView = styled.View`
 flex-direction: row;
 align-items: center;
 margin-left: 20px;

`;

const Item = styled.View`
 padding: 3px;


`;
const Text = styled.Text`
   font-size: 16px;
   margin-left: 10px;
`;

export default ()=>{
    return(
       <StarView>
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
         <Text>5.0</Text>
       
    </StarView>
    )
}
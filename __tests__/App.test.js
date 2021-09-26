import React from 'react'
import { shallow } from "enzyme";
import { SumissionItem } from "../src/components/SumissionItem";
import renderer from 'react-test-renderer';


test('Mostrar correctamente el componente', () => {
 
    const item = {
        index: 1,
        name: 'eer',
        surname: 'rkr',
        age: 3
    }

 const tree = renderer.create(<SumissionItem sumissionItem={item} />).toJSON();
 expect(tree).toMatchSnapshot();

})

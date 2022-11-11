import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TablaEmpleados from './TablaEmpleados';

test('Render TablaEmpleados', () => {
    const component = render( <TablaEmpleados  /> );
    component.getByText('Nombre');

})

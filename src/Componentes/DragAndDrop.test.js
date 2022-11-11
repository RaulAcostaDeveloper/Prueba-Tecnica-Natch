import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DragAndDrop from './DragAndDrop';

test('Render DragAndDrop', () => {
    const component = render( <DragAndDrop  /> );
    component.getByText('Drag and drop');

})

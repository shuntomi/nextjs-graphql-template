// TODO: 後で消す
/* eslint-disable */
// @ts-ignore
describe('describe example', () => {
  it('sample example', () => {
    const actual = 'hoge';
    const expected = 'hoge';

    expect(actual).toBe(expected);
  });
});

// import { InMemoryCache, gql } from '@apollo/client';
// import React from 'react';
// import Index from '../src/pages';
// import renderer from 'react-test-renderer';
// import { MockedProvider } from '@apollo/client/testing';

// const cache = new InMemoryCache();
// cache.writeQuery({
//   query: gql`
//     query Viewer {
//       viewer {
//         id
//         name
//         status
//       }
//     }
//   `,
//   data: {
//     viewer: {
//       __typename: 'User',
//       id: 'Baa',
//       name: 'Baa',
//       status: 'Healthy',
//     },
//   },
// });

// describe('Index', () => {
//   it('renders the html we want', async () => {
// const component = renderer.create(
//   <MockedProvider cache={cache}>
//     <Index />
//   </MockedProvider>
// );
// expect(component.toJSON()).toMatchSnapshot();
// expect('test').toBe('test');
//   });
// });
